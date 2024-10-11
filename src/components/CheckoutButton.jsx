import React from 'react'
import { StyledCheckoutButton } from './styles/CheckoutButton.styled'

export default function CheckoutButton( {onClick }) {
  return (
    <StyledCheckoutButton onClick={onClick}>
        Confirm Order
    </StyledCheckoutButton>
  )
}
