import { useCart } from '../../context';
import Item from '../item/Item';
import './menu.css'
//temName, itemDesc, itemPrice, expandable
const favs = [
	{
		itemId: 1,
		itemName: 'המברוגר',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 45,
		count: 1,
		expandable: false
	},
	{
		itemId: 2,
		itemName: 'שניצל',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 34,
		count: 1,
		expandable: false
	},
	{
		itemId: 3,
		itemName: 'דודה',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 123,
		count: 1,
		expandable: false
	}
]

const categories = [
	{
		itemId: 4,
		itemName: 'מאפים',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 45,
		count: 1,
		expandable: true
	},
	{
		itemId: 5,
		itemName: 'מתוקים',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 34,
		count: 1,
		expandable: true
	},
	{
		itemId: 6,
		itemName: 'שתייה',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 123,
		count: 1,
		expandable: true
	},
	{
		itemId: 7,
		itemName: 'כריכים',
		itemDesc: 'ניתן להזמין תוספות',
		itemImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		itemPrice: 123,
		count: 1,
		expandable: true
	}
]

const Menu = () => {
	const {cartState, addToCart} = useCart();

	return (
		<main className='menu' id='menu'>
			<div id='portal'></div>
			<section className='section-menu'>
				<p>מועדפים</p>
				<div className="menu-items">
					{favs.map((item, id) => <Item key={item.itemId} {...item} addToCart={addToCart}/>)}
				</div>
			</section>
			<section className='section-menu'>
				<p>קטגוריות</p>
				<div className="menu-items">
				<div className="menu-items">
					{categories.map((item, id) => <Item key={item.itemId} {...item}/>)}
				</div>
				</div>
			</section>
		</main>
	)
}

export default Menu;