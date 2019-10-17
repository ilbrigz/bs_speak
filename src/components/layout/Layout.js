import React from "react"
import PropTypes from "prop-types"
import Navbar from "../navbar/Navbar"
import "./normalize.css"
import "antd/dist/antd.css"
import "./layout.css"
import { GlobalTextStyle } from "../shared_styles/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "../shared_styles/themeProvider"
import { AppProvider } from "../../context/index"

import Footer from "../footer/Foother"
import ModalForm from "../modal/Modal"

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalTextStyle />
        <ModalForm />
        <Navbar />
        <div className="content-container"> {children}</div>
        <Footer />
      </ThemeProvider>
    </AppProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
