import { useCart } from '../../context';
import { createPortal } from 'react-dom';
import './cart.css'

const Cart = () => {

	const {cartState, addToCart, removeFromCart} = useCart();
	const getTotalPrice = () => {
		return cartState.items.reduce((prev, curr) => prev + curr.itemPrice * curr.count, 0)
	}

	return createPortal(
		<div>
      {cartState.items.length > 0 ? (
        <div className='table-wrapper'>
          <table className='table' role='table'>
            <thead>
              <tr>
                <th role='row'></th>
                <th role='row'>שם</th>
                <th role='row'>כמות</th>
                <th role='row'>עלות</th>
              </tr>
            </thead>
            <tbody role='content'>
              {cartState.items.map((item) => (
                <tr key={item.itemId} role='rowgroup'>
                  <td role='row'>
                    <img src={item.itemImage} alt={item.itemDesc} style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td role='row'>{item.itemName}</td>
                  <td role='row'><span className='button table-btn add' onClick={() => addToCart(item)}> + </span>{item.count}<span onClick={() => removeFromCart(item)} className='table-btn remove'> - </span></td>
                  <td role='row'>₪{item.itemPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <strong>מחיר כולל: ₪{getTotalPrice()}</strong>
          </div>
          <button onClick={() => alert('Implement checkout functionality')}>הזמנה</button>
        </div>
      ) : (
        <p className='table-wrapper'>העגלה שלך ריקה</p>
      )}
		</div>, document.getElementById('portal'))
}

export default Cart;