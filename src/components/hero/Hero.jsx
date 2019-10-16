import React, { useState, useContext, useRef } from "react"
import { useSpring } from "react-spring"
import { message } from "antd"
import {
  SHeader,
  StyledForm,
  StyledHero,
  StyledImage,
  StyledDescription,
  StyledP,
} from "./hero.styles"
import {
  StyledButton,
  StyledInput,
} from "../shared_styles/sharedStyledComponent"
import { AppContext } from "../../context"

function validateEmail(email) {
  var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Hero = React.memo(
  ({ pageSubtitle, pageTitle, heroSubtitle, description, HeroImage }) => {
    const [msg] = useState({ type: "", msg: "" })
    const inputRef = useRef(0)

    const { setAppEmail, openModal } = useContext(AppContext)
    const springProps = useSpring({
      config: {
        duration: 600,
      },
      opacity: 1,
      from: { opacity: 0 },
    })
    const submitEmail = async () => {
      if (!validateEmail(inputRef.current.value)) {
        message.error("Please enter a valid Email.", 5)
      } else {
        await setAppEmail(inputRef.current.value)
        openModal()
      }
    }
    const onInputEnter = async e => {
      e.preventDefault()
      if (!validateEmail(inputRef.current.value)) {
        message.error("Please enter a valid Email.", 5)
      } else {
        await setAppEmail(inputRef.current.value)
        openModal()
      }
    }

    return (
      <StyledHero>
        <SHeader style={springProps}>{pageTitle}</SHeader>
        <StyledP>{pageSubtitle}</StyledP>
        <StyledImage>
          <HeroImage />
        </StyledImage>
        <StyledDescription>{description}</StyledDescription>
        <StyledForm onSubmit={onInputEnter}>
          <StyledInput
            ref={inputRef}
            as="input"
            type="email"
            placeholder="Email Address"
          />
          <p
            style={{
              textAlign: "center",
              marginBottom: 0,
              color:
                msg.type !== "SENDING"
                  ? msg.type === "SUCCESS"
                    ? "#29a25d"
                    : "#D8000C"
                  : "#316aaf",
              fontSize: ".8rem",
              opacity: 0.8,
            }}
          >
            {msg.msg}
          </p>
          <StyledButton
            type="button"
            style={{ cursor: "pointer" }}
            onClick={submitEmail}
          >
            Sign up for beta, It's{" "}
            <span style={{ color: "#c9103d" }}>FREE</span>
          </StyledButton>
        </StyledForm>
        <StyledP>{heroSubtitle}</StyledP>
        <br></br>
      </StyledHero>
    )
  }
)
export default Hero
