import React from 'react';
import testId from '../../helpers/dataTestIds';

export default function Counter() {
  return (
    <div className="counter">
      <button type="button" className="btn-counter" data-testid={ testId[19] }>+</button>
      <input type="text" />
      <button type="button" className="btn-counter" data-testid={ testId[18] }>-</button>
    </div>
  );
}
