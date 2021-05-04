import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Results from './Results'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/click/i);
  expect(linkElement).toBeInTheDocument();
});

test('test the rendered data', async () =>{
  const results = { 
    "name": "Luke Skywalker",
  }
  const headers = {
    "content-type": "application/json",
  }

  render (
    <Results results={results} headers={headers}/>
    )

    expect(screen.getByText('"Luke Skywalker"')).toBeInTheDocument();
  });
