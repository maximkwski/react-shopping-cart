import React, { useState } from 'react'
import Button from './AddButton'
import { StyledCard, StyledCardContainer, StyledImgContainer, StyledBtnContainer } from './styles/Card.styled'
import { useCart } from '../CartContext';

export default function Card({ item }) {
    const { addToCart, updateQuantity, cartItems, removeFromCart } = useCart();
    const cartItem = cartItems.find((i) => i.id === item.name);
    const count = cartItem ? cartItem.quantity : 0;

    const handleAdd = () => {
        addToCart({...item, id: item.name});
    }

    const handleRemove = () => {
        if (count > 1) {
          updateQuantity(item.name, count - 1);
        } else if (count === 1) {
            removeFromCart(item.name);
        }
    };

  return (
    <StyledCard>
        <StyledCardContainer>
            <StyledImgContainer>
                <img src={item.image.mobile} alt={item.name} />
            </StyledImgContainer>
            <StyledBtnContainer>
                <Button title={'Add to Cart'}
                onAdd={handleAdd}
                onRemove={handleRemove}
                count={count}
                />
            </StyledBtnContainer>
        </StyledCardContainer>
        <div>
            <p>{item.category}</p>
            <h3>{item.name}</h3>
            <h4>${item.price.toFixed(2)}</h4>
        </div>
    </StyledCard>
  )
}
