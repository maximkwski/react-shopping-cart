import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 1.2em 0;
   

    a {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
        text-decoration: none;
        position: relative;

        span {
            position: absolute;
            top: -15px;
            font-weight: 500;
            font-size: 0.9em;
            color: hsl(14, 86%, 42%);

        }
    }
`