import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import CardsContainer from "../components/features/cards_container/CardsContainer"
import HeroImage from "../components/imageComponents/Hero.image"

import {
  pageTitle,
  pageSubtitle,
  cards,
  heroSubtitle,
  description,
} from "../data/home.data"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero
      pageSubtitle={pageSubtitle}
      pageTitle={pageTitle}
      description={description}
      heroSubtitle={heroSubtitle}
      HeroImage={HeroImage}
    />
    <CardsContainer cards={cards} />
  </>
)

export default IndexPage
