import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { MemoryRouter } from 'react-router-dom';

describe('LoginForm', () => {
  it('renders the component', () => {
    render(<MemoryRouter><LoginForm /></MemoryRouter>);
    expect(screen.getByText('התחברות')).toBeInTheDocument;
  });

	it('handles email input change', () => {
		render(<MemoryRouter><LoginForm /></MemoryRouter>);
		const emailInput = screen.getByPlaceholderText('אימייל');
		fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
		expect(emailInput.value).toBe('test@example.com');
	});

	it('handles password input change', () => {
		render(<MemoryRouter><LoginForm /></MemoryRouter>);
		const passwordInput = screen.getByPlaceholderText('סיסמה');
		fireEvent.change(passwordInput, { target: { value: 'password123' } });
		expect(passwordInput.value).toBe('password123');
	});

	it('calls setIsRegister when "הרשמה" button is clicked', () => {
		const setIsRegisterMock = jest.fn();
		render(<MemoryRouter><LoginForm setIsRegister={setIsRegisterMock} /></MemoryRouter>);
		const registerButton = screen.getByText('הרשמה');
		fireEvent.click(registerButton);
		expect(setIsRegisterMock).toHaveBeenCalledWith(true);
	});
});
