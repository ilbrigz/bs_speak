import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero/Hero"
import HeroImage from "../components/imageComponents/Hero3.image"
import CardsContainer from "../components/features/cards_container/CardsContainer"
import { Link } from "gatsby"
import { Icon } from "antd"
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
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "16px",
        marginBottom: "2rem",
        marginTop: "2rem",
      }}
    >
      <Link to="/h2/">
        <Icon type="swap-left" />
        <span>Take Control</span>
      </Link>
    </div>
  </>
)

export default Page2
