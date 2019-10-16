import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  display: block;
`

const Wrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 130px;
  max-height: 130px;
  div {
    max-width: 130px;
    max-height: 130px;
    img {
      max-width: 130px;
      max-height: 130px;
    }
  }
  @media (max-width: 600px) {
    max-width: 100px;
    max-height: 100px;
    div {
      max-width: 100px;
      max-height: 100px;
      img {
        max-width: 100px;
        max-height: 100px;
      }
    }
  }
`

const CardImage = ({ cardImg }, ...props) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: {
            childImageSharp: {}
            relativeDirectory: { eq: "home_images" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allFile.edges.find(
        edge => edge.node.childImageSharp.fixed.originalName === cardImg
      )
      if (!image) {
        return null
      }
      return (
        <Wrapper>
          <StyledImg {...props} fixed={image.node.childImageSharp.fixed} />
        </Wrapper>
      )
    }}
  />
)
export default CardImage
