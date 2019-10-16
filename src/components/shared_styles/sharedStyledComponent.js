import styled from "styled-components"
import { baseButton } from "./baseStyledComponent"

export const StyledButton = styled(baseButton)`
  margin-top: 6px;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: ${props => props.theme.bg_green};
  color: ${props => props.theme.white};
`
export const StyledInput = styled(baseButton)`
  font-size: 1rem;
`
