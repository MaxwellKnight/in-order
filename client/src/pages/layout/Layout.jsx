import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components';
import './layout.css';
import { CartProvider } from '../../context';

const Layout = () => {
	return (
		<div className='layout-container'>
			<CartProvider>
				<Navigation />
				<main className='container'>
						<Outlet />
				</main>
			</CartProvider>
		</div>
	)
}

export default Layout;