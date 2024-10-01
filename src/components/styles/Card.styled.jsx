import styled from "styled-components";

export const StyledCard = styled.div`
    margin-top: 1.5em;

    h4 {
        color: hsl(14, 86%, 42%);
        font-weight: 500;
    }

    h3 {
        color: hsl(14, 65%, 9%);
        font-weight: 500;
    }

    p {
       color: hsl(12, 20%, 44%)
    }
`

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    margin-bottom: 1em;
`

export const StyledImgContainer = styled.div`
    width: 100%;

    & > img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 8px;
    }
`

export const StyledBtnContainer = styled.div`
    position: absolute;
    bottom: -20px; 
    left: 50%;
    transform: translateX(-50%);

    
`