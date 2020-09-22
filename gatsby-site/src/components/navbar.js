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
      <Nav.Link>
        <Link className="btn btn-primary" to="/">Page1</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="btn btn-primary" to="why_vote">Why Vote</Link>
      </Nav.Link>
      <Nav.Link>
        <Link className="btn btn-primary" to="404">Page3</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavbar
