import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByText, getByLabelText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const input = getByLabelText(/Tarefa/i);
    const button = getByText(/Adicionar/i);
    listTodo.map((item) => {
      fireEvent.change(input, { target: { value: item } } );
      fireEvent.click(button);
    });
    listTodo.map((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const testString = 'testando';
    const { getByText } = render(<Item content={testString} />);
    expect(getByText(testString)).toBeInTheDocument();
  })
})
