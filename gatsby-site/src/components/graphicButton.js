import React from "react"
import PropTypes from "prop-types"

import clipboard from "../data/images/clipboard.svg"
import question from "../data/images/question.svg"

function getImage(name){
  if( name === "Register"){
    return clipboard;
  } else if ( name === "Info"){
    return question;
  } else {
    return question;
  }
}

const GraphicButton = ({ name, style }) => (
  <a href="#" className="graphic-button btn" style={{...style}}>
    <img src={getImage(name)} height="75%" style={{marginTop:"4px"}} />
    <p>{name}</p>
  </a>
)

GraphicButton.propTypes = {
  name: PropTypes.oneOf(['Register', 'Info']),
  color: PropTypes.string
}

GraphicButton.defaultProps = {
  name: `Info`,
  color: "crimson"
}

export default GraphicButton
