import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { StyledButton } from './styles/Button.styled'

export default function Button() {
  return (
    <StyledButton>
      <MdAddShoppingCart size={20}/>
      <span>Add To Cart</span>
    </StyledButton>
  )
}
