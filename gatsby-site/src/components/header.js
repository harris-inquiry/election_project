import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse, Col } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* import MyNavbar from "./navbar" */
import IVotedSticker from "../data/images/IVotedSticker.png"

const Header = ({ siteTitle }) => {

  const [isMenuOpen, menuOpen] = useState(false)

  return (
    <div style={{position:"absolute", left:0, right:0, top:0, zIndex:100}}>
      <div className="header" style={{background:(isMenuOpen ? 'rgba(51, 117, 193, 0.97)':'none')}}>
        <Link to="/" >
          <img src={IVotedSticker} />
        </Link>
        <button onClick={() => menuOpen(!isMenuOpen)} className="btn-hamburger">
          <FontAwesomeIcon icon={faBars} className="hamburger" style={{color:"white", fontSize:"2rem"}} />
        </button>
        <Collapse in={isMenuOpen}>
          <div className="header-container">
            <Col sm>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/why_vote" className="nav-link">Get inspired</Link>
              <Link to="/resources" className="nav-link">Resources</Link>
            </Col>
            <Col sm></Col>
          </div>
        </Collapse>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
