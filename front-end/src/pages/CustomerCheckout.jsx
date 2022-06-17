import React, { useEffect, useContext } from 'react';
import Buttons from '../components/Buttons';
import TableItens from '../components/CustomerCheckout/TableItens';
import ValueTotal from '../components/CustomerCheckout/ValueTotal';
import Combo from '../components/Inputs/Combo';
import Default from '../components/Inputs/Default';
import ProductsContext from '../context/ProductsContext';
import testId from '../helpers/dataTestIds';
import sumTotalPriceCart from '../utils/sumTotalPriceCart';

export default function Checkout() {
  const { cart, setAllTotalPrice } = useContext(ProductsContext);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = sumTotalPriceCart(cart);
      setAllTotalPrice(sum);
    } else {
      setAllTotalPrice(0);
    }
  }, [cart, setAllTotalPrice]);

  return (
    <div>
      <h2>Finalizar pedido</h2>
      <div>
        <TableItens />
        <ValueTotal />
      </div>
      <h2>Detalhes e Endereço para entrega</h2>
      <div>
        <Combo
          combo={ {
            name: 'P. Vendedora Responsável',
            itens: ['Fulana Pereira'],
            testId: testId[29],
          } }
        />
        <Default
          type="text"
          name="Endereço"
          placeholder="Travessa Terceira da Castanheira, Bairro Murici"
          testId={ testId[30] }
        />
        <Default
          type="text"
          name="Número"
          placeholder="198"
          testId={ testId[31] }
        />
        <Buttons
          type="button"
          testId={ testId[32] }
          textButton="Finalizar Pedido"
        />
      </div>
    </div>
  );
}
