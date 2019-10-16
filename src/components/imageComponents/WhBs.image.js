import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WhyBs = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "why-bs.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, srcSetBreakpoints: [400, 600, 900, 1200]) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default WhyBs
