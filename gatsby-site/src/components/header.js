import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse, Col, Button } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import IVotedSticker from "../data/images/IVotedSticker.png"
import StateSelect from "../components/stateSelect"


const Header = ({ siteTitle }) => {

  const [isMenuOpen, menuOpen] = useState(false)

  return (
    <div style={{position:"absolute", left:0, right:0, top:0, zIndex:100}}>
      <div className={"header" + (isMenuOpen ? " is-open" : "")} >
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
              <Link to="/Issues" className="nav-link">On the Issues</Link>
              <Link to="/resources" className="nav-link">Get Involved</Link>
              <Link to="/register" className="nav-link">Register to Vote</Link>
              <Link to="/AbsenteeVoting" className="nav-link">Absentee Voting</Link>
              <Link to="/EarlyVoting" className="nav-link">Early Voting</Link>
            </Col>
            <Col sm>
              <h1 style={{color:"white"}}>Find your state</h1>
              {/* <StateSelect style={{flex:1}} /> */}
              <Link className="btn btn-primary btn-lg" to="/wisconsin">Go</Link>
            </Col>
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
