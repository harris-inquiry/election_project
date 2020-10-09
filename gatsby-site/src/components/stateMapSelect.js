import React from "react"

import USState from "../data/USStates.svg"

const StateMapSelect = ({ style }) => {
  return (
    <div id="state-svg" style={style}>
      <object data={USState} style={{ width:"100%" }} />
    </div>
  )
}

export default StateMapSelect
