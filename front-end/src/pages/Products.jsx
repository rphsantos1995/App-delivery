// import React, { useEffect, useState } from 'react';
import React from 'react';
import CardProduct from '../components/CardProduct';
import Navbar from '../components/Navbar';

export default function Products() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/products')
  //     .then((data) => setProducts(data));
  // }, []);

  const products = [
    {
      id: 'dsghlshdag',
      price: '2,20',
      url_image: 'image',
    },
  ];

  return (
    <div>
      <Navbar userRole="customer" />
      {
        products.map((product, index) => (
          <CardProduct
            key={ product.id }
            price={ product.price }
            image={ product.url_image }
            index={ index + 1 }
          />
        ))
      }
    </div>
  );
}
