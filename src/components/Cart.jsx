import { WiSmoke } from "react-icons/wi";
import { Container } from './styles/Container.styled'
import { StyledCart, StyledEmptyDiv, StyledCarbonInfo, StyledFullCart } from './styles/Cart.styled'
import { Flex } from './styles/Flex.styled'
import Button from "./AddButton";
import CartItem from './CartItem'
import CheckoutButton from "./CheckoutButton";


export default function Cart() {
  return (
    <Container>
        <StyledCart>
            <div>
                <h2>Your Cart {'(2)'}</h2>

                {/* <StyledEmptyDiv>
                    <img src="./assets/images/illustration-empty-cart.svg" alt="empty cart" />
                    <p>Your added items will apper here</p>
                </StyledEmptyDiv> */}
                <StyledFullCart>
                    <ul>
                        <CartItem />
                        <CartItem />
                    </ul>
                    <div className='total'>
                        <span>Order Total</span>
                        <span>$28.00</span>
                    </div>
                    <StyledCarbonInfo>
                        <p>
                            <WiSmoke size={28} style={{color: 'hsl(159, 69%, 38%)'}}/>
                            <span>This is <strong>carbon-neutral</strong> delivery</span>
                        </p>
                    </StyledCarbonInfo>
                    <CheckoutButton />
                </StyledFullCart>
            </div>
        </StyledCart>
    </Container>
  )
}
