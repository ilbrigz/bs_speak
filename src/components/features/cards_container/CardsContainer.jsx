import React from "react"
import Card from "../card/Card"
import { StyledCards } from "./CardsContainer.styles"

const CardsContainer = ({ cards }) => {
  console.log(cards)
  return (
    <StyledCards>
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </StyledCards>
  )
}

export default CardsContainer
