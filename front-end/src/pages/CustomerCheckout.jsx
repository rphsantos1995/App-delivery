import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../components/Buttons';
import TableItens from '../components/CustomerCheckout/TableItens';
import ValueTotal from '../components/CustomerCheckout/ValueTotal';
import Combo from '../components/Inputs/Combo';
import Default from '../components/Inputs/Default';
import ProductsContext from '../context/ProductsContext';
import UserContext from '../context/UserContext';
import testId from '../helpers/dataTestIds';
import sumTotalPriceCart from '../utils/sumTotalPriceCart';
import Navbar from '../components/Navbar';
import { requestGet, requestPost } from '../services/api';

export default function Checkout() {
  const { cart, allTotalPrice, setAllTotalPrice } = useContext(ProductsContext);
  const { currentUser } = useContext(UserContext);
  const Navigate = useNavigate();
  const [address, setAdress] = useState('');
  const [addressNumber, setAdressNumber] = useState(null);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSeller] = useState(2);

  useEffect(() => {
    requestGet('/users?role=seller')
      .then(({ data }) => {
        setSellers(data);
      });
    if (cart.length > 0) {
      const sum = sumTotalPriceCart(cart);
      setAllTotalPrice(sum);
    } else {
      setAllTotalPrice(0);
    }
  }, [cart, setAllTotalPrice]);

  const checkoutOrder = async () => {
    // event.preventDefault();
    const totalPrice = cart.reduce((a, c) => a + (c.price * c.quantity), 0).toFixed(2);
    const body = {
      saleInfo: {
        userId: currentUser.id,
        totalPrice,
        sellerId: selectedSeller,
        deliveryAddress: address,
        deliveryNumber: addressNumber,
        status: 'Pendente',
      },
      products: cart.map(({ id, quantity }) => ({ productId: id, quantity })),
    };
    try {
      const token = localStorage.getItem('token');
      const { data } = await requestPost('sales', body, token);
      localStorage.removeItem('cart');
      return Navigate(`/customer/orders/${data.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main>
      <Navbar userRole="customer" />
      <h2>Finalizar pedido</h2>
      <div>
        <TableItens />
        <ValueTotal testId={ testId[28] } allTotalPrice={ String(allTotalPrice) } />
      </div>
      <h2>Detalhes e Endereço para entrega</h2>
      <div>
        <Combo
          combo={ {
            name: 'P. Vendedora Responsável',
            itens: sellers,
            testId: testId[29],
            change: ({ target: { value } }) => setSeller(value),
          } }
        />
        <Default
          id="address-input"
          type="text"
          name="Endereço"
          placeholder="Travessa Terceira da Castanheira, Bairro Murici"
          testId={ testId[30] }
          change={ ({ target: { value } }) => setAdress(value) }
        />
        <Default
          id="address-num-input"
          type="text"
          name="Número"
          placeholder="198"
          testId={ testId[31] }
          change={ ({ target: { value } }) => setAdressNumber(value) }
        />
        <Buttons
          type="button"
          testId={ testId[32] }
          textButton="Finalizar Pedido"
          classButton="btn-0"
          clicked={ checkoutOrder }
          disabled={ !(addressNumber && address.length && cart.length) }
        />
      </div>
    </main>
  );
}
