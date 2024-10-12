import styled from "styled-components";

export const StyledCardList = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${props => props.theme.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`