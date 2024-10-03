import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { StyledButton } from './styles/AddButton.styled'

export default function Button({title}) {
  return (
    <StyledButton>
      <MdAddShoppingCart size={20}/>
      <span>{title}</span>
    </StyledButton>
  )
}
