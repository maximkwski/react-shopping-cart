import { Container } from './styles/Container.styled'
import { StyledCart, StyledEmptyDiv } from './styles/Cart.styled'
import { Flex } from './styles/Flex.styled'

export default function Cart() {
  return (
    <Container>
        <StyledCart>
            <div>
                <h2>Your Cart {'(0)'}</h2>
                <StyledEmptyDiv>
                    <img src="./assets/images/illustration-empty-cart.svg" alt="empty cart" />
                    <p>Your added items will apper here</p>
                </StyledEmptyDiv>
            </div>
        </StyledCart>
    </Container>
  )
}
