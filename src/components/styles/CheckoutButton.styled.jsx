import styled from "styled-components";

export const StyledCheckoutButton = styled.button`
    width: 100%;
    background-color: hsl(14, 86%, 42%);
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    color: ${ ( {theme} ) => theme.colors.body};
    padding: 1em 1.5em;
    margin: 2em 0 1em;

    &:hover {
        cursor: pointer;
        background-color: darkred;
    }
`