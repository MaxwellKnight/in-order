import React, { createContext, useContext, useReducer } from 'react';

// Create a context to manage user-related state and actions
const UserContext = createContext();

// Define initial state
const initialState = {
  user: null,
  loading: true,
  error: null,
};

// Define actions to modify the state
const actions = {
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
};

// Reducer function to handle state changes
const userReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, user: action.payload, loading: false, error: null };
    case actions.SET_LOADING:
      return { ...state, loading: action.payload, error: null };
    case actions.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

// Create a provider component to wrap your app and provide the user context
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Define actions to be used by components
  const setUser = (user) => dispatch({ type: actions.SET_USER, payload: user });
  const setLoading = (loading) => dispatch({ type: actions.SET_LOADING, payload: loading });
  const setError = (error) => dispatch({ type: actions.SET_ERROR, payload: error });

  const contextValue = {
    ...state,
    setUser,
    setLoading,
    setError,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Custom hook to access the user context
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
