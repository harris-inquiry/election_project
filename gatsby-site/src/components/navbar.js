import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="/">Vote</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/page-2">Why Vote</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/page-2">Resources</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Other</Link>
      </li>
    </ul>
  </div>
</nav>

)

export default Navbar
