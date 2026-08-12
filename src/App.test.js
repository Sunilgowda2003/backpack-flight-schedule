import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Flight Schedule heading', () => {
  render(<App />);

  const headingElement = screen.getByText(/Flight Schedule/i);

  expect(headingElement).toBeInTheDocument();
});