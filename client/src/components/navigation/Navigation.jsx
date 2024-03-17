import {Cart} from '../../components'
import Favorites from '../../assets/icons/favorites.svg';
import User from '../../assets/icons/user.svg';
import cart from '../../assets/icons/cart.svg';
import { useCart, useUser } from '../../context';
import { useState } from 'react';
import './navigation.css'

const Navigation = () => {
	const {cartState} = useCart();
	const {user} = useUser();
	const [isCartShown, setIsCartShown] = useState(false);
	return (
		<>
		<nav className='navbar' id='navbar'>
			<div className='nav-items'>
				<div className='favorites'>
					<img className='nav-icon' src={Favorites} alt='favorites icon'/>
				</div>
				<div className='my-profile'>
					{user ? <img className='nav-icon' src={User} alt='profile icon'/> : null}
				</div>
				<div className='cart' onClick={() => setIsCartShown(prev => !prev)}>
					<img className='nav-icon' src={cart} alt='cart icon'/>
					{cartState.items.length > 0 ? <div className='cart-state'>{cartState.items.reduce((prev, curr) => prev + curr.count, 0)}</div> : null}
				</div>
			</div>
			<div className='logo'>
				<span>ByOrder</span>
			</div>
		</nav>
		{isCartShown ? <Cart /> : null}
		</>
	)
}

export default Navigation;