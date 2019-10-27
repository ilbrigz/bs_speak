import React from "react"
import { useSpring } from "react-spring"
import WhyBs from "../../components/imageComponents/WhBs.image"
import {
  SHeader,
  StyledHero,
  StyledImage,
  StyledP,
} from "../../components/shared_styles/why-bs.styles"

const whyBoardSpeak = React.memo(() => {
  const springProps = useSpring({
    config: {
      duration: 600,
    },
    opacity: 1,
    from: { opacity: 0 },
  })

  return (
    <StyledHero>
      <StyledImage>
        <WhyBs />
      </StyledImage>
      <SHeader style={springProps}>Why BoardSpeak</SHeader>
      <StyledP>
        Are you still using email and group chat for team collaboration? Are you
        looking for a better way to organize and search for important
        information within your group conversations? Are you using enterprise
        collaboration tools and wished that it was more user-friendly to
        convince more team members to join in and stay active? Fret not.
        BoardSpeak is here. And its absolutely FREE! There's no limit in the
        number of members. You only pay for the more advanced features that you
        will actually use. With enhanced admin controls, it gives you freedom of
        choice, to filter what you only want to read, without the rest! Built by
        people who simply want more out of LIFE!
      </StyledP>
    </StyledHero>
  )
})
export default whyBoardSpeak
