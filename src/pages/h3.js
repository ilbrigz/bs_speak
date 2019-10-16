import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import HeroImage from "../components/imageComponents/Hero3.image"
import CardsContainer from "../components/features/cards_container/CardsContainer"
import {
  pageTitle,
  pageSubtitle,
  cards,
  heroSubtitle,
  description,
} from "../data/home3.data"

const Page2 = () => (
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

export default Page2
