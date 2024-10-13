import { useState } from "react";
import { useCart } from "../CartContext";
import { WiSmoke } from "react-icons/wi";
import { Container } from './styles/Container.styled'
import ConfirmationModal from "./ConfirmationModal";
import CartItem from './CartItem'
import CheckoutButton from "./CheckoutButton";
import { StyledCart, StyledEmptyCart, StyledCarbonInfo, StyledFullCart, ContinueShoppingButton } from './styles/Cart.styled'


export default function Cart() {
  const { cartItems } = useCart();
  const [showModal, setShowModal] = useState(false);

  const totalItems = cartItems.reduce((sum,item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
        <StyledCart>
            <div>
                <h2>Your Cart {`(${totalItems})`}</h2>
                
                {cartItems.length === 0 ? (
                    <>
                        <StyledEmptyCart>
                            <img src="./assets/images/illustration-empty-cart.svg" alt="empty cart" />
                            <p>Your added items will apper here</p>
                        </StyledEmptyCart>
                        <ContinueShoppingButton to="/">Continue Shopping</ContinueShoppingButton>
                    </>
                ) : (
                    <StyledFullCart>
                        <ul>
                           {cartItems.map((item) => (
                                <CartItem key={item.id} item={item}/>
                           ))}
                        </ul>
                        <div className='total'>
                            <span>Order Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <StyledCarbonInfo>
                            <p>
                                <WiSmoke size={28} style={{color: 'hsl(159, 69%, 38%)'}}/>
                                <span>This is <strong>carbon-neutral</strong> delivery</span>
                            </p>
                        </StyledCarbonInfo>
                        <CheckoutButton onClick={handleCheckout} />
                    </StyledFullCart>
                )}
            </div>
        </StyledCart>
        {showModal && <ConfirmationModal onClose={handleCloseModal}/>}
    </>
  )
}
