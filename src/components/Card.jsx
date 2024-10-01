import React from 'react'
import Button from './Button'
import { StyledCard, StyledCardContainer, StyledImgContainer, StyledBtnContainer } from './styles/Card.styled'

export default function Card({item: {image, name, category, price}}) {
  return (
    <StyledCard>
        <StyledCardContainer>
            <StyledImgContainer>
                <img src={image.mobile} alt={name} />
            </StyledImgContainer>
            <StyledBtnContainer>
                <Button />
            </StyledBtnContainer>
        </StyledCardContainer>
        <div>
            <p>{category}</p>
            <h3>{name}</h3>
            <h4>${price.toFixed(2)}</h4>
        </div>
    </StyledCard>
  )
}
