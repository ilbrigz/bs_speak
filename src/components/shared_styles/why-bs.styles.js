import styled from "styled-components"
import { animated } from "react-spring"

export const SHeader = styled(animated.h1)`
  font-size: 2.2rem;
  font-weight: 500;
  margin-top: 3rem;
  @media (max-width: 600px) {
    margin-top: 0;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`
export const StyledP = styled.p`
  font-weight: 300;
  text-align: justify;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`

export const StyledHero = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 570px) {
    padding-bottom: 0;
  }
`
export const StyledImage = styled.div`
  width: 70%;
  margin-bottom: 0.5rem;
  margin-top: 2rem;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    margin-top: 3rem;
    width: 70%;
  }
  @media (min-width: 1600px) {
    width: 65%;
  }
`
