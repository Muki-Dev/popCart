import React from 'react';

const Cart = ({cart,removeFromCart}) => {
	return(
			<div className='cart-container'>
				<h2>🛒Mon Panier</h2>
				{
					cart.length > 0 ? (
						cart.map((plant) => (
							<div key={plant.id} className='cart-item'>
								<span>{plant.name} - {plant.price}€</span>
								<button className='delete-btn' onClick={() => removeFromCart(plant.id)}> 🍾Supprimer</button>
							</div>
							))
						):(
							<p className='empty-cart'>Votre Panier est vide</p>
						)
				}
			</div>
		)
} 
export default Cart;