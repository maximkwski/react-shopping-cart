import styled from "styled-components";

export const StyledButton = styled.button`
    width: 150px;
    height: 45px;
    padding: 0.8em 1.3em;
    font-weight: 600;
    color: ${props => props.count > 0 ? '#fff' : 'hsl(14, 65%, 9%)'};
    background-color: ${props => props.count > 0 ? 'hsl(14, 86%, 42%)' : 'white'};
    border: 1px solid hsl(14, 25%, 72%);
    border-radius: 25px;
    transition: background-color 0.3s ease;

    &:hover {
        cursor: pointer;
        border: 1px solid hsl(14, 86%, 42%);
        color: ${props => props.count === 0 && 'hsl(14, 86%, 42%)'};
    }

    display: flex;
    align-items: center;
    justify-content: ${props => props.count === 0 ? 'center' : 'space-between'};
    gap: 8px;

    & > svg {
        color: hsl(14, 86%, 42%);
    }
`

export const StyledCounterButton = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    background: none;
    cursor: pointer;
    padding: 1px 2px;
    border-radius: 50px;
    border: 1px solid #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #fff;
        color: hsl(14, 86%, 42%);
    }
`