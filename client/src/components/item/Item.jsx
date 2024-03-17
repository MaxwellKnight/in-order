import './item.css';


const Item = ({addToCart, ...rest}) => {
	const {itemId, itemName, itemDesc, itemPrice,itemImage, expandable} = rest;
	return (
		<div className='menu-item'>
			<div className='item-header'>
				<img src={itemImage} alt="burger" />
			</div>
			<div className="item-body">
				<div className="item-desc">
					<span>{itemName}</span>
					<span>{itemDesc}</span>
				</div>
				<button 
					className='add-button' 
					style={{backgroundColor: expandable ? '#0ebac5' : 'current'}}
					onClick={() => !expandable ? addToCart({...rest}) : null}
				>
						{expandable ? ' + ' : `+ ${itemPrice}₪`}
				</button>
			</div>
		</div>
	)
}

export default Item;