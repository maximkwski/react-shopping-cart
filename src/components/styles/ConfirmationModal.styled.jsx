import styled from "styled-components";
import { StyledCheckoutButton } from "./CheckoutButton.styled";

export const StyledConfirmationModal = styled.div`
  font-size: 0.8rem;
  color: hsl(14, 65%, 9%); 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const StyledModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;

  h2{
    margin-top: 0.5em;
  }

  p{
    font-size: 0.7em;
    opacity: 0.6;
  }
`

export const StyledOrderList = styled.ul`
    
    list-style-type: none;
    padding: 1em;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.body};
`

export const StyledOrderItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em 0;

  .info {
    display: flex;
    align-items: center;
    gap: 10px;

    div  {
       display: flex;
       flex-direction: column;
       gap: 1em;
    }
    
    div > h4 {
        font-weight: 500;
    }
    
    div > span {
        color: hsl(7, 20%, 60%);
    }

    strong {
        color: hsl(14, 86%, 42%);
        margin-right: 1em;
    }

    img {
        width: 50px;
    }
  }

  .price {
        font-weight: 500;
    }

  &:not(:last-child) {
  border-bottom: 0.8px solid hsl(12, 20%, 44%, 0.3);
  }

  &.total > span:nth-child(2) {
    font-weight: 700;
  }
`;

export const StyledButton = styled(StyledCheckoutButton)`
   margin: 0.8em 0;
`;