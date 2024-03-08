import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Home, Login, Layout, Profile} from './pages'
import './App.css'
import { UserProvider } from './context'

const App = () => {

	const router = createBrowserRouter([{
		path: "/",
		element: <Layout/>,

		children: [
			{path: "/",  element: <Home/>},
			{path: "/profile", element: <Profile />}
		]},

		{path: "/login", element: <Login/>},
	])

  return (
	<UserProvider>
		<RouterProvider router={router} />
	</UserProvider>
	)
}

export default App
