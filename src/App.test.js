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
