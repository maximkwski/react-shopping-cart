import React from 'react'
import { MdAddShoppingCart, MdRemove, MdAdd } from "react-icons/md";
import { StyledButton, StyledCounterButton, StyledCounterContainer } from './styles/AddButton.styled'


export default function Button({title, onAdd, onRemove, count = 0}) {
  const handleAdd = (e) => {
    e.stopPropagation();
    onAdd();
  }

  const handleRemove = (e) => {
    e.stopPropagation();
    if (count > 0) {
      onRemove();
    }
  }
  
  return (
    <StyledButton count={count} onClick={count === 0 ? handleAdd : undefined} >
      {count === 0 ? ( 
        <>
          <MdAddShoppingCart size={20}/>
          <span onClick={handleAdd}>{title}</span>
        </>
      ):(
        <StyledCounterContainer>
          <StyledCounterButton onClick={handleRemove}>
            <MdRemove size={20} />
          </StyledCounterButton>
          <span>{count}</span>
          <StyledCounterButton onClick={handleAdd}>
            <MdAdd size={20} />
          </StyledCounterButton>
        </StyledCounterContainer>
      )}
      
    </StyledButton>
  )
}
