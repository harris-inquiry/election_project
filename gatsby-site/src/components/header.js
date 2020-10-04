import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { Collapse } from "react-bootstrap"
/* import MyNavbar from "./navbar" */
import IVotedSticker from "../data/images/IVotedSticker.png"

const Header = ({ siteTitle }) => (
  <header >
    <Link to="/" >
      <img src={IVotedSticker} />
    </Link>
    <Collapse>
      <div className="header-menu">
        blah
      </div>
    </Collapse>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
