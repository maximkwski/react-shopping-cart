import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledHeader } from './styles/Header.styled'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <Flex style={{ justifyContent: 'space-between'}}>
                <h1>TOP Desserts Shop</h1>
                <Link to='/cart'><FaCartShopping size={24} style={{ color: 'hsl(14, 86%, 42%)' }} /></Link>
            </Flex>
        </Container>
    </StyledHeader>
  )
}
