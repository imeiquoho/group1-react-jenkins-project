import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number and all team members', () => {
  render(<App />);

  expect(screen.getByText('Group 1')).toBeInTheDocument();
  expect(screen.getByText('Ime Iquoho')).toBeInTheDocument();
  expect(screen.getByText('Muhammad Parwaz')).toBeInTheDocument();
  expect(screen.getByText('Anwar Qasim')).toBeInTheDocument();
  expect(screen.getByText('Bei Zhang')).toBeInTheDocument();
});