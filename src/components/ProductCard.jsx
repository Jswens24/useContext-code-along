import React, { useContext } from 'react';
import { CartContext } from '../App';


function ProductCard({ product, isCart, index }) {

  const { cart, setCart } = useContext(CartContext);

  const clickHandler = (event) => {
    if (isCart) {
      setCart((prevState) => {
        const newState = [...cart]
        newState.splice(index, 1)
        return newState
      })
    } else {
      setCart([...cart, product])
    }
  }

  return (
    <div className="product-card">
      <div className="upper-card">
        <h4>{product.name}</h4>
        <button onClick={clickHandler}>{isCart ? "Remove" : "Add to Cart"}</button>
      </div>
      <p>{product.desc}</p>
    </div>
  )
}

export default ProductCard