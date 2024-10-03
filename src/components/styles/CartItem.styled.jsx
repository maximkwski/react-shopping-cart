import styled from "styled-components";

export const StyledCartItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;

    h4 {
        color: hsl(14, 65%, 9%);
        font-weight: 500;
    }


    border-bottom: 0.8px solid hsl(12, 20%, 44%, 0.3);

    .info {
        display: flex;
        gap: 1em;
    }

    span:nth-child(1) {
        color: hsl(14, 86%, 42%);
        font-weight: 600;
    }
    
    span:nth-child(2) {
        color: hsl(7, 20%, 60%);
    }

    span:nth-child(3) {
        color: hsl(12, 20%, 44%);
        font-weight: 500;
    }

   
`