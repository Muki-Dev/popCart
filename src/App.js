import React, {useState} from 'react';
import Cart from './components/Cart';
import './styles/styles.css';

const  App = ()  => {
  
  const plantList = [
    {id:1, name: 'Ficus', price:10},
    {id:2, name: 'Monstera', price:15},
    {id:3, name: 'Cactus', price:8},
  ];

  const [cart,setCart] = useState(plantList);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((plant) => plant.id !== id))
  }

  return (
    <div className="app-container">
      <h1>🏬 Boutique de Plantes</h1>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
