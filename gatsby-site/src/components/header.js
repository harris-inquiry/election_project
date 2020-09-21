import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MyNavbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header>
    <MyNavbar/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
