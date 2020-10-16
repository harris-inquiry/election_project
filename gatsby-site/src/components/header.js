import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"
import { Collapse, Col, Row } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = ({ siteTitle }) => {

  const [isMenuOpen, menuOpen] = useState(false)

  return (
    <div style={{position:"absolute", left:0, right:0, top:0, zIndex:100}}>
      <header className={`${isMenuOpen ? "is-open" : ""}`} >
        <div style={{color:"white", fontSize:"1.5rem", fontFamily:"Poppins"}}>Vote2020</div>
        <button onClick={() => menuOpen(!isMenuOpen)} className="btn-hamburger">
          <FontAwesomeIcon icon={faBars} className="hamburger" style={{color:"white", fontSize:"2rem"}} />
        </button>
        <Collapse in={isMenuOpen}>
          <Row className="header-container">
            <Col sm>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/Issues" className="nav-link">On the Issues</Link>
              <Link to="/resources" className="nav-link">Get Involved</Link>
            </Col>
            <Col sm>
              <Link to="/register" className="nav-link">Register to Vote</Link>
              <Link to="/AbsenteeVoting" className="nav-link">Absentee Voting</Link>
              <Link to="/EarlyVoting" className="nav-link">Early Voting</Link>
              {/* <h1 style={{color:"white"}}>The battleground states</h1>
                  <Link className="btn btn-danger btn-lg" to="/wisconsin">Wisconsin</Link> */}
            </Col>
          </Row>
        </Collapse>
      </header>
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
