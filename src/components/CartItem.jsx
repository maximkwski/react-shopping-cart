import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { StyledCartItem } from './styles/CartItem.styled'

export default function CartItem() {
  return (
    <StyledCartItem>
            <div>
                <h4>Vanilla Panna Cotta</h4>
                <div className='info'>
                    <span>x4</span><span>$7.00</span><span>$28.00</span>
                </div>
            </div>
            <div>
                <div><TiDeleteOutline size={24}/></div>
            </div>
    </StyledCartItem>
  )
}
