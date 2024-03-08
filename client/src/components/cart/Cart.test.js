import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { CartProvider } from '../../context'; // Import your CartProvider
import Cart from './Cart';

// Mock createPortal to prevent rendering into the DOM during tests
jest.mock('react-dom', () => ({
	...jest.requireActual('react-dom'),
	createPortal: (element) => element,
 }));
 
const renderWithCartProvider = (ui) => {
  return render(
    <MemoryRouter>
      <CartProvider>{ui}</CartProvider>
    </MemoryRouter>
  );
};

describe('Cart', () => {
  it('renders the component with an empty cart', () => {
    renderWithCartProvider(<Cart />);
    expect(screen.getByText('העגלה שלך ריקה')).toBeInTheDocument;
  });

});
