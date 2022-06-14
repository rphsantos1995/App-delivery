const isProductInCart = (cart, product) => !!(cart.find(({ id }) => id === product.id));

const changeItemInCart = (cart, product, action) => {
  if (isProductInCart(cart, product)) {
    return cart.map((existingProduct) => {
      if (existingProduct.id === product.id && action === 'add') {
        return {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
      } if ((existingProduct.id === product.id && action === 'remove')) {
        return {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };
      } if (existingProduct.id === product.id && typeof action === 'number') {
        console.log('aqui');
        return {
          ...existingProduct,
          quantity: action,
        };
      }
      return existingProduct;
    });
  }

  if (typeof action === 'number') return [...cart, { ...product, quantity: action }];
  return [...cart, { ...product, quantity: 1 }];
};

const handleCart = (cart, product, quantity) => {
  const newCart = changeItemInCart(cart, product, quantity);
  return newCart.filter((item) => item.quantity > 0);
};

export default handleCart;
