import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';

describe('Login', () => {
  it('renders LoginForm by default', () => {
    render(<MemoryRouter><Login /></MemoryRouter>);

    // Check if the LoginForm is rendered
    expect(screen.getByPlaceholderText('אימייל')).toBeInTheDocument;
    expect(screen.getByPlaceholderText('סיסמה')).toBeInTheDocument;
    // Add more assertions based on your LoginForm structure
  });
});
