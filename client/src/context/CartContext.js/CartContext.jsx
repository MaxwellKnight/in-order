// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state of the cart
const initialCartState = {
  items: [],
};

// Define the actions for the reducer
const cartActions = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART: 'UPDATE_CART',
};

// Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
		case cartActions.ADD_TO_CART:
		// Check if the product already exists in the cart
		const existingProductIndex = state.items.findIndex(item => item.itemId === action.payload.itemId);
		if (existingProductIndex !== -1) {
			// If the product exists, update its count
			const updatedItems = [...state.items];
			updatedItems[existingProductIndex] = {
				...updatedItems[existingProductIndex],
				count: updatedItems[existingProductIndex].count + 1,
			};

			return {
				...state,
				items: updatedItems,
			};
		} else {
			// If the product is not in the cart, add it with count set to 1
			return {
				...state,
				items: [...state.items, { ...action.payload, count: 1 }],
			};
		}
	case cartActions.REMOVE_FROM_CART:
		const index = state.items.findIndex(item => item.itemId === action.payload.itemId);
      if (index !== -1) {
        // If the product exists, update its count
        let updatedItems = [...state.items];
        updatedItems[index] = {
          ...updatedItems[index],
          count: updatedItems[index].count - 1,
        };
		  if(updatedItems[index].count <= 0){
			return {
				...state,
				items: state.items.filter(item => item.itemId !== action.payload.itemId),
			};
		  }
        return {
          ...state,
          items: updatedItems,
        };
		}
		return {
			...state,
			items: state.items.filter(item => item.itemId !== action.payload.itemId),
		};
    case cartActions.UPDATE_CART:
      return {
        ...state,
        items: action.payload,
      };
   default:
      return state;
  }
};

// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  // Define actions to dispatch
  const addToCart = (product) => {
    dispatch({
      type: cartActions.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: cartActions.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const updateCart = (updatedCart) => {
    dispatch({
      type: cartActions.UPDATE_CART,
      payload: updatedCart,
    });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
