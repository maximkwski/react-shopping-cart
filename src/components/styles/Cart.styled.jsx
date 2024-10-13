import styled from "styled-components";
import { StyledCheckoutButton } from "./CheckoutButton.styled";

export const StyledCart = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 1em;
    margin-bottom: 1.5em;
    height: fit-content;

   

    h2 {
        color: hsl(14, 86%, 42%);
    }
    p {
        color: hsl(12, 20%, 44%);
        font-weight: 500;
    }

    @media (min-width: ${props => props.theme.tablet}) {
        position: sticky;
        top: 2rem;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
    }

`

export const StyledEmptyCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    height: 300px;
    
`


export const ContinueShoppingButton = styled(StyledCheckoutButton)`
 width: fit-content;

 @media (min-width: ${props => props.theme.tablet}) {
    display: none;
 }
`;

export const StyledCarbonInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
    padding: 0.5em 1.5em;
    background-color: ${ ({theme}) => theme.colors.body };
    border-radius: 8px;
    p {
        color: hsl(14, 65%, 9%);    
        font-weight: 400;

        display: flex;
        align-items: center;
    }
    strong {
        font-weight: 500;
    }
`

export const StyledFullCart = styled.div`
    ul {
        padding: 0;
        list-style: none;
    }

    .total {
        display: flex;
        justify-content: space-between;
        color: hsl(14, 65%, 9%);
        margin: 1.2em 0;
    }

    .total > span:nth-child(2) {
        font-weight: 700;
        font-size: 1.2em; 
    }
    
`