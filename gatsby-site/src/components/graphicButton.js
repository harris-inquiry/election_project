import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import clipboard from "../data/images/clipboard.svg"
import question from "../data/images/question.svg"

function getImage(title){
  if( title === "Register"){
    return clipboard;
  } else if ( title === "Info"){
    return question;
  } else {
    return question;
  }
}

const GraphicButton = ({ title, to, style, className }) => (
  <Link to={to} className={"graphic-button btn " + className} style={{...style}}>
    <img alt={title + "-button"} src={getImage(title)} />
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
