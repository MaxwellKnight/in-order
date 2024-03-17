import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import {Home, Login, Layout, Profile} from './pages'
import './App.css'
import { UserProvider, useUser } from './context'
import React from 'react';

const ProtectedRoute = ({ element, ...rest }) => {
	const { user } = useUser();
 
	// Redirect to login if user is not logged in
	if (!user) {
	  return <Navigate to="/login" />;
	}
 
	return React.cloneElement(element, rest);
 };

const App = () => {

	const router = createBrowserRouter([
		{
		  path: '/',
		  element: <Layout />,
		  children: [
			{ path: '/', element: <Home />},
			{ path: '/profile', element: <ProtectedRoute element={<Profile />} /> }, // Protect the Profile route
		  ],
		},
		{ path: '/login', element: <Login /> },
	]);

  return (
	<UserProvider>
		<RouterProvider router={router} />
	</UserProvider>
	)
}

export default App