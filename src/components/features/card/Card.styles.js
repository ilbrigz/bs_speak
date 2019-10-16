import styled from "styled-components"
import { animated } from "react-spring"

export const StyledCard = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`
export const CardBody = styled.div`
  text-align: center;
`
