import React, { useContext, useEffect } from 'react'
import ValueTotal from '../components/CustomerCheckout/ValueTotal';
import Navbar from '../components/Navbar'
import ProductsContext from '../context/ProductsContext';
import testId from '../helpers/dataTestIds';
import { useLocation } from 'react-router-dom';
import sumTotalPriceCart from '../utils/sumTotalPriceCart';

export default function OrderDetails() {
  const {cart, setAllTotalPrice } = useContext(ProductsContext);
  const path = useLocation().pathname;
  const role = path.slice(1).split(/[/]/)[0]; 

  useEffect(() => {
    if (cart.length > 0) {
      const sum = sumTotalPriceCart(cart);
      setAllTotalPrice(sum);
    } else {
      setAllTotalPrice(0);
    }
  }, [cart, setAllTotalPrice]);

  return (
    <>
    <Navbar userRole={ role }/>
    <h1>Detalhes do Produto</h1>
    <div>
        <span>Pedido</span>
        <span>P.Vendedora</span>
        <span>Data</span>
        <span>Entregue</span>
        <button type='button'>Marcar como Entregue</button>
    </div>
    <table>
        <thead>
            <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitátio</th>
            <th>Sub Total</th>
            </tr>
        </thead>
        <tbody>
        {cart.map(({ id, name, quantity, price }, index) =>(
            <tr key={id}>
                <td data-testid={`${testId[41]}-${index}`}>{ index + 1 }</td>
                <td data-testid={`${testId[42]}-${index}`}>{ name }</td>
                <td data-testid={`${testId[43]}-${index}`}>{ quantity }</td>
                <td data-testid={`${testId[44]}-${index}`}>{ (price).replace('.',',') }</td>
                <td data-testid={`${testId[45]}-${index}`}>
                    { 
                    (price * quantity)
                    .toFixed(2)
                    .replace('.',',') 
                    }
                </td>
            </tr>
        ))}
        </tbody>
    </table>
    <ValueTotal valueId={46} />
    </>
  )
}
