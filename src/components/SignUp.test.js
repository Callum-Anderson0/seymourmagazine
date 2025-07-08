import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp component', () => {
  test('renders the mailing list heading', () => {
    render(<SignUp />);
    expect(screen.getByText(/MAILING LIST/i)).toBeInTheDocument();
  });

  test('shows error if name and email are missing on submit', () => {
    render(<SignUp />);
    fireEvent.click(screen.getByText(/sign up/i));
    expect(screen.getByText(/Name and Email are required/i)).toBeInTheDocument();
  });

  test('shows error if permission is not checked', () => {
    render(<SignUp />);
    fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: 'Test User', name: 'name' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'test@example.com', name: 'email' } });
    fireEvent.click(screen.getByText(/sign up/i));
    expect(screen.getByText(/You must agree to the terms/i)).toBeInTheDocument();
  });
});
