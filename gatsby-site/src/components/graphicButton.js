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

const GraphicButton = ({ name, color, style }) => (
  <a href="#"><div style={{height:"6rem", minWidth:"8rem", background:color, borderRadius:"1rem", margin:4, ...style}}>
    <img src={getImage(name)} height="80%" style={{marginTop:"4px"}} />
    <p style={{color:"white", marginBottom:0, fontSize:"1.5rem", fontWeight:"bold", position:"relative", bottom:21 }}>{name}</p>
  </div></a>
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
