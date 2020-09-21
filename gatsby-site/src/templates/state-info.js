import React from "react"
// import { Link } from "gatsby"
// import Image from "image"

const StateInfo = ({ stateId }) => {

  return (
    <div>
      <h1>{stateId}</h1>
      <p>Some information on {stateId}</p>
    </div>
  )
}

export default StateInfo