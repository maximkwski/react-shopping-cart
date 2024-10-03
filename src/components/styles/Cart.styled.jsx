import styled from "styled-components";

export const StyledCart = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 1em;
    margin-bottom: 1.5em;
    h2 {
        color: hsl(14, 86%, 42%);
    }
    p {
        color: hsl(12, 20%, 44%);
        font-weight: 500;
    }

    &>div>ul {
        padding: 0;
        list-style: none;
    }
`

export const StyledEmptyDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
    height: 300px;
    
`