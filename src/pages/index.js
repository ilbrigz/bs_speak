import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import CardsContainer from "../components/features/cards_container/CardsContainer"
import HeroImage from "../components/imageComponents/Hero.image"
import { Link } from "gatsby"
import { Icon } from "antd"

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
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        fontSize: "16px",
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <Link to="/h2/">
        <span>Take Control</span>
        <Icon type="swap-right" />
      </Link>
    </div>
  </>
)

export default IndexPage
