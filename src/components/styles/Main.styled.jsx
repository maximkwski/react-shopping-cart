import styled from "styled-components";

export const StyledMain = styled.div`
    @media (min-width: ${props => props.theme.tablet}) {
        display: grid;
        grid-template-columns: 2fr minmax(330px, 1fr);
        gap: 2rem;
    } 

`