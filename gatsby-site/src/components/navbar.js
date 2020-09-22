import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav  } from "react-bootstrap"

const MyNavbar = () => (
<Navbar expand="sm" variant="dark" fixed="top">
  <Navbar.Brand>
    <Link className="btn btn-primary" to="/">Vote</Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    <Nav>
      <div className="nav-link">
        <Link className="btn btn-primary" to="/">Page1</Link>
      </div>
      <div className="nav-link">
        <Link className="btn btn-primary" to="why_vote">Why Vote</Link>
      </div>
      <div className="nav-link">
        <Link className="btn btn-primary" to="404">Page3</Link>
      </div>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavbar
