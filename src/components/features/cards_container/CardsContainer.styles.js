import styled from "styled-components"

export const StyledCards = styled.div`
  justify-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
  @media (min-width: 570px) {
    align-items: start;
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 3rem;
  }
`
