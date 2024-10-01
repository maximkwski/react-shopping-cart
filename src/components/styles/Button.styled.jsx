import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 0.8em 1.3em;
    font-weight: 600;
    color: hsl(14, 65%, 9%);
    background-color: white;
    border: 1px solid hsl(14, 25%, 72%);
    border-radius: 20px;

    &:hover {
        cursor: pointer;
    }

    display: flex;
    align-items: center;
    gap: 8px;

    & > svg {
        color: hsl(14, 86%, 42%);
    }
`