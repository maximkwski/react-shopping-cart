import React, { useState } from 'react'
import Button from './AddButton'
import { StyledCard, StyledCardContainer, StyledImgContainer, StyledBtnContainer } from './styles/Card.styled'

export default function Card({item: {image, name, category, price}}) {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleRemove = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };

  return (
    <StyledCard>
        <StyledCardContainer>
            <StyledImgContainer>
                <img src={image.mobile} alt={name} />
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
            <p>{category}</p>
            <h3>{name}</h3>
            <h4>${price.toFixed(2)}</h4>
        </div>
    </StyledCard>
  )
}
