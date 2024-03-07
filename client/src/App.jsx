import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'

const App = () => {

	const router = createBrowserRouter([{
		path: "/",
		element: <Layout/>,

		children: [
			{path: "/",  element: <Home/>}
		]},

		{path: "/login", element: <Login/>},
		{path: "/register", element: <Register/>},
	])

  return (
		<RouterProvider router={router} />
	)
}

export default App
