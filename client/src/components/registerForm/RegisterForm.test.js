import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('renders the component and handles form changes', () => {
    const setIsRegisterMock = jest.fn();
    render(<RegisterForm setIsRegister={setIsRegisterMock} />);

    // Check if the form elements are present
    expect(screen.getByLabelText('שם מלא')).toBeInTheDocument;
    expect(screen.getByLabelText('אימייל')).toBeInTheDocument;
    expect(screen.getByLabelText('סיסמה')).toBeInTheDocument;
    expect(screen.getByLabelText('שם משתמש')).toBeInTheDocument;
    expect(screen.getByLabelText('מס נייד')).toBeInTheDocument;
    expect(screen.getByLabelText('אישור סיסמה')).toBeInTheDocument;
    expect(screen.getByLabelText('אישור תנאי שימוש')).toBeInTheDocument;

    // Simulate form changes
    fireEvent.change(screen.getByLabelText('שם מלא'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('אימייל'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('סיסמה'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('שם משתמש'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('מס נייד'), { target: { value: '123-45-678' } });
    fireEvent.change(screen.getByLabelText('אישור סיסמה'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByLabelText('אישור תנאי שימוש'));

    // Check if the form state is updated
    expect(screen.getByLabelText('שם מלא').value).toBe('John Doe');
    expect(screen.getByLabelText('אימייל').value).toBe('john@example.com');
    expect(screen.getByLabelText('סיסמה').value).toBe('password123');
    expect(screen.getByLabelText('שם משתמש').value).toBe('john_doe');
    expect(screen.getByLabelText('מס נייד').value).toBe('123-45-678');
    expect(screen.getByLabelText('אישור סיסמה').value).toBe('password123');
    expect(screen.getByLabelText('אישור תנאי שימוש').checked).toBe(true);



    // You can add additional assertions based on your component's behavior
  });
});
