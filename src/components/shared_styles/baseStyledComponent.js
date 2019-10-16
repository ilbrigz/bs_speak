import styled from "styled-components"

export const baseButton = styled.button`
  border-radius: 1rem;
  border: 3px solid ${props => props.theme.bg_green};
  padding: 1rem;
  &:focus {
    outline: none;
  }
`
