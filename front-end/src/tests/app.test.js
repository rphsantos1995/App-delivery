import { render, screen } from '@testing-library/react';
import Buttons from '../components/Buttons';

test('O header possui todos os links de navegação', () => {
  render(<Buttons />);
  const button = screen.getByRole('button');
  expect(button.type).toBe('button')
  });