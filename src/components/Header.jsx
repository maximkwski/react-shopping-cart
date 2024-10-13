import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledHeader } from './styles/Header.styled'
import { Link } from 'react-router-dom'
import { useCart } from '../CartContext';

export default function Header() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum,item) => sum + item.quantity, 0);
  return (
    <StyledHeader>
        <Container>
            <Flex style={{ justifyContent: 'space-between'}}>
                <h1>TOP Desserts Shop</h1>
                <Link to='/cart'>
                  <FaCartShopping size={28} style={{ color: 'hsl(14, 86%, 42%)' }} />
                  <span>{totalItems}</span>
                </Link>
            </Flex>
        </Container>
    </StyledHeader>
  )
}
