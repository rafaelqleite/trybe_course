import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './renderWithRouter';
import App from './App';

afterEach(cleanup);

it('deve renderizar o componente App', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/i);
  expect(home).toBeInTheDocument();
});