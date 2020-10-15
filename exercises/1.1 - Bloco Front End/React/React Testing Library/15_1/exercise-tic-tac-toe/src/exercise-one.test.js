import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  afterEach(cleanup);
  test('Verificar se foi renderizada nove casas', () => {
    const { getByTestId } = render(<TicTacToe />);
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    array.map((item) => {
      expect(getByTestId(`cell_${item}`)).toBeDefined();
    });
  });

  test('Começar com todos os espaços em branco.', () => {
    const { getByTestId } = render(<TicTacToe />);
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    array.map((item) => {
      expect(getByTestId(`cell_${item}`).textContent).toBe('');
    });

  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const {queryByText} = render(<TicTacToe />);
    expect(queryByText('Fim de Jogo')).toBeNull();
  });
});
