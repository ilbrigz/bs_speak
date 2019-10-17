import React, { useState, useContext } from "react"
import { Dropdown, Icon, Button, Menu } from "antd"
import "./navbar.css"
import { Link } from "gatsby"
import { HamburgerSpring } from "react-animated-burgers"
import Logo from "../imageComponents/Logo.image"
import { StyledButton } from "../shared_styles/sharedStyledComponent"
import styled from "styled-components"
import { AppContext } from "../../context"
import { Location } from "@reach/router"

const NavBtn = styled(StyledButton)`
  padding: 0 5px;
  border-radius: 3px;
  font-weight: 300;
  font-size: 1rem;
  margin: 13px 10px;
  @media (max-width: 601px) {
    width: 50%;
    padding: 5px 5px;
    margin: 13px 25%;
  }
`

const StyledDropdownBtn = styled(Button)`
  font-size: 18px !important;
  color: ${props => props.isactive} !important;
  cursor: pointer;

  span {
    color: ${props => props.isactive};
  }
`

export default function Navbar() {
  const { openModal, navState, setNavState, closeNav } = useContext(AppContext)
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link
          to="/"
          onClick={closeNav}
          activeStyle={{ color: "#FFAF0F" }}
          style={{ fontSize: "18px" }}
        >
          Get things done
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link
          to="/h2"
          onClick={closeNav}
          activeStyle={{ color: "#FFAF0F" }}
          style={{ fontSize: "18px" }}
        >
          Take control
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link
          to="/h3"
          onClick={closeNav}
          activeStyle={{ color: "#FFAF0F" }}
          style={{ fontSize: "18px" }}
        >
          Be organized
        </Link>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">
          <Logo></Logo>
        </div>
      </div>
      <div className="nav-btn">
        <HamburgerSpring
          barColor="#454041"
          buttonWidth={30}
          isActive={navState}
          onClick={e => {
            setNavState(!navState)
            e.currentTarget.blur()
          }}
        />
      </div>
      <Location>
        {({ location }) => {
          return (
            <div className={`nav-links ${navState ? "show" : "hide"}`}>
              {/* <StyledButton>Sign Up</StyledButton> */}
              <Dropdown overlay={menu} placement="bottomRight">
                <StyledDropdownBtn
                  type="link"
                  size="large"
                  {...(checkLocation("home", location.pathname) && {
                    isactive: "#FFAF0F",
                  })}
                >
                  HOME <Icon type="down" />
                </StyledDropdownBtn>
              </Dropdown>
              <Link
                to="/why-boardspeak"
                onClick={closeNav}
                activeStyle={{ color: "#FFAF0F" }}
              >
                Why Us
              </Link>

              <NavBtn onClick={() => openModal()}>SIGN UP</NavBtn>
            </div>
          )
        }}
      </Location>
    </div>
  )
}

function checkLocation(locationArg, locationProps) {
  console.log(locationArg, locationProps)
  if (
    locationArg === "home" &&
    (locationProps === "/h2" ||
      locationProps === "/h3" ||
      locationProps === "/")
  ) {
    return true
  }
  return false
}
