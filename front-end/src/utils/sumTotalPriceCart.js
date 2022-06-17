const sumTotalPriceCart = (cart) => (
  cart
    .map(({ quantity, price }) => quantity * price)
    .reduce((acc, cur) => acc + cur)
    .toFixed(2)
    .replace('.', ',')
);

export default sumTotalPriceCart;
