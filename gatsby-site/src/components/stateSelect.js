import React, { useState } from "react"

import { Form, Button } from "react-bootstrap"
import { STATES_DATA, NO_STATE } from "../data/states"
import StateMapSelect from "./stateMapSelect"

const stateList = Object.keys(STATES_DATA)

function getStateLink(state){
  if( state === NO_STATE ){
    return NO_STATE
  }
  try {
    return STATES_DATA[state]["officialLink"]
  } catch (er) {
    return "DATA_RETRIEVE_FAILED"
  }
}

function getStateInitials(state) {
  if( state === NO_STATE ){
    return ""
  } else {
    return STATES_DATA[state]["initials"]
  }
}


const StateSelect = ({onChange, style}) => {
  const [usState, setUSState] = useState(NO_STATE)
  const [displayStateInfo, setDisplayState] = useState("none")

  function changeUSState(evt) {
    var newUSState = evt.target.value
    setUSState(newUSState)
    onChange(evt)
  }

  return (
    <div id="state-selector">
      <div style={{display:"flex"}}>
        <Form style={{flex:1, ...style}}>
          <Form.Group controlId="stateSelectForm">
            <Form.Label srOnly>State Select</Form.Label>
            <Form.Control size="lg" defaultValue={NO_STATE} as="select" custom
                          onChange={(evt) => changeUSState(evt)}>
              <option className="text-black" value={NO_STATE}>--Select State--</option>
              {stateList.map((state) =>
                <option value={state} key={state}>{state.replace("_", " ")}</option>)
              }
            </Form.Control>
          </Form.Group>
        </Form>
        <Button variant="success" size="lg" href={getStateLink(usState)} target="_blank" style={{display:(usState != NO_STATE ? "inherit" : "none"), border:"2px solid #76bf8c"}} >Vote {getStateInitials(usState)}</Button>
      </div>
      <StateMapSelect style={(usState == NO_STATE ? {} : {display:"none"})} onClick={(clicked) => console.log(clicked.id)} />
    </div>
  )
}



StateSelect.defaultProps = {
  onChange: () => {},
}

export default StateSelect
