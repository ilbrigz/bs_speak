import React from "react"
import { useInView } from "react-intersection-observer"
import { useSpring } from "react-spring"
import { CardBody, StyledCard } from "./Card.styles"
import CardImage from "../../imageComponents/Card.image"

export default function Card({ image, title, description }) {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })
  const springProps = useSpring({
    config: {
      duration: 1000,
    },
    opacity: inView ? 1 : 0,
    from: { opacity: 0 },
  })

  return (
    <StyledCard ref={ref} style={springProps}>
      <CardImage cardImg={image} />
      <CardBody>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardBody>
    </StyledCard>
  )
}
