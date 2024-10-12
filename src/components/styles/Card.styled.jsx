import styled from "styled-components";

export const StyledCard = styled.div`
    
    display: flex;
    flex-direction: column;
    height: 100%;
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
    @media (min-width: ${props => props.theme.tablet}) {
        font-size: 0.9em;
    }
`

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* flex-grow: 1; */
    margin-bottom: 2em;
`

export const StyledImgContainer = styled.div`
    width: 100%;
    /* aspect-ratio: 1 / 1; */
    overflow: hidden;

    & > img {
        width: 100%;
        height: auto;
        /* object-fit: cover; */
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