import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClipboardCheck, faHome } from '@fortawesome/free-solid-svg-icons'

import clipboard from "../data/images/clipboard.svg"
import question from "../data/images/question.svg"

function getImage(icon){
  if( icon == "clipboard"){
    return clipboard;
  } else if( icon == "home" ) {
    return faHome;
  } else {
    return faClipboardCheck;
  }
}

const GraphicButton = ({ title, to, style, className, icon}) => (
  <Link to={to} className={"graphic-button btn " + className} style={{...style}}>
    <FontAwesomeIcon icon={ getImage(icon) } className="hamburger" style={{color:"white", fontSize:"5rem"}} />
    <p>{title}</p>
  </Link>
)

/* GraphicButton.propTypes = {
 *   title: PropTypes.oneOf(['Home', 'Register', 'The Issues', "Resources"])
 * }
 *  */
GraphicButton.defaultProps = {
  title: "The Issues",
  color: "crimson",
  to: "/"
}

export default GraphicButton
