import React, { useContext } from 'react'
import { CartContext, UserContext } from '../App';

function Header() {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const clickHandler = (event) => {
    console.log('UserContext:', user);
    console.log('CartContext:', cart);
  };

  return (
    <header>
      <button onClick={clickHandler}>Check Context!</button>
      <h3>Hello, {user}</h3>
    </header>
  )
}

export default Header