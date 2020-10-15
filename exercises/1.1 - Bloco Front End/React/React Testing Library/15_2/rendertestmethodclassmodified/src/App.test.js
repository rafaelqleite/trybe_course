import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    BrowserRouter: ({ children }) => (<div>{children}</div>),
  }
})

function renderWithRouter(ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

test('renders home page', () => {
  const { getByText } = renderWithRouter(<App />);
  const personalInfo = getByText(/página sobre mim/i);
  expect(personalInfo).toBeInTheDocument();
});

describe('routes', () => {
  afterEach(cleanup);

  test('navigating from home to projects', () => {
    const { getByText } = renderWithRouter(<App />);

    const personalInfo = getByText(/página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/projetos/i));

    const project = getByText(/página de projetos/i);
    expect(project).toBeInTheDocument();
  });

  test('navigating from home to comments', () => {
    const { getByText } = renderWithRouter(<App />);

    const personalInfo = getByText(/página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();

    fireEvent.click(getByText(/deixe um comentário/i));

    const commentPageTitle = getByText(/comente!/i);
    expect(commentPageTitle).toBeInTheDocument();

  })

});

describe('comment form', () => {
  afterEach(cleanup);
  test('commenting and show comment on the screen', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);

    fireEvent.click(getByText(/deixe um comentário/i));

    fireEvent.change(getByTestId('input-comment'), { target: { value: 'batatinha'}});

    fireEvent.click(getByTestId('button-comment'));

    expect(getByText(/batatinha/i)).toBeInTheDocument();
  })
})

describe('testando se está no endereço correto e forçando um endereço errado', () => {
  afterEach(cleanup);
  test('testando o caminho /comments', () => {

    const { getByText, history } = renderWithRouter(<App />);

    const personalInfo = getByText(/página sobre mim/i);
    expect(personalInfo).toBeInTheDocument();
    // parte acima checa se está na página inicial

    fireEvent.click(getByText(/deixe um comentário/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/comments');
    const aboutAll = getByText(/Comente!/i);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });
})

