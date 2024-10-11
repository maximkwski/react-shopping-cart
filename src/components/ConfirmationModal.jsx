import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { StyledConfirmationModal, StyledModalContent, StyledOrderList, StyledOrderItem, StyledButton } from './styles/ConfirmationModal.styled';
import { useCart } from '../CartContext';

export default function ConfirmationModal({ onClose }) {
  const { cartItems, clearCart } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNewOrder = () => {
    clearCart();
    onClose();
  }

  return (
    <StyledConfirmationModal>
      <StyledModalContent>
        <FaRegCheckCircle style={{color: 'hsl(159, 69%, 38%)'}} size={32}/>
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
        <StyledOrderList>
          {cartItems.map((item) => (
            <StyledOrderItem key={item.id}>
              <div className='info'>
                <img src={item.image.thumbnail} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span><strong>{item.quantity}x</strong>@ ${item.price}</span>
                </div>
              </div>
              <div className='price'>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </StyledOrderItem>
          ))}
          <StyledOrderItem className='total'>
            <span>Order Total</span><span>${totalPrice.toFixed(2)}</span>
          </StyledOrderItem>
        </StyledOrderList>
        <StyledButton  onClick={handleNewOrder}>Start New Order</StyledButton>
      </StyledModalContent>
    </StyledConfirmationModal>
  )
}
