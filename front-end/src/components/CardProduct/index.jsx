import React from 'react';
import testId from '../../helpers/dataTestIds';
import Counter from '../Inputs/Counter';

export default function CardProduct() {
  return (
    <div>
      <span className="price" data-testid={ testId[16] }>
        2,20
      </span>
      <img src="imagem" alt="produto" data-testid={ testId[17] } />
      <p data-testid={ testId[15] }>Descrição</p>
      <Counter />
    </div>
  );
}
