import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Navbar = () => (
<nav class="navbar navbar-expand">
  <Link className="navbar-home" to="/">Vote</Link>
  <div className="navbar-nav">
    <Link className="nav-link" to="/page-2">Why Vote</Link>
    <Link className="nav-link" to="/page-2">Resources</Link>
    <Link className="nav-link" to="/">Other</Link>
  </div>
</nav>
)

export default Navbar
