import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { StyledCartItem } from './styles/CartItem.styled'
import { useCart } from '../CartContext';

export default function CartItem( { item } ) {
  const { removeFromCart, updateQuantity } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  }

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    } else {
      removeFromCart(item.id);
    }
  }

  return (
    <StyledCartItem>
            <div>
                <h4>{item.name}</h4>
                <div className='info'>
                   <input type="number" min='1' value={item.quantity} onChange={handleQuantityChange} />
                   <span>${item.price.toFixed(2)}</span>
                   <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <div>
                <div className='delete' onClick={handleRemove}>
                  <TiDeleteOutline size={24}/>
                </div>
            </div>
    </StyledCartItem>
  )
}
