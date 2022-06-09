import React, { useEffect } from 'react';
// import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';
import { requestGet } from '../services/api';

export default function Products() {
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await requestGet('/products');
      setProducts(data);
    })();
  }, []);

  return (
    <div>
      <Navbar userRole="customer" />
      <p>Tela de produtos</p>
      {/* {
        products.map((product, index) => (
          <CardProduct
            key={ product.id }
            id={ product.id }
            price={ product.price }
            image={ product.url_image }
            index={ index + 1 }
            name={ product.name }
          />
        ))
      } */}
    </div>
  );
}
