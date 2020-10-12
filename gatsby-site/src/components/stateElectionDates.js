import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"

import StateSelect from "./stateSelect"
import { STATES_DATA, NO_STATE } from "../data/states"


/* const stateList = Object.keys(STATES_DATA) */

function getStateInfo(state, info){
  if( state === NO_STATE ){
    return NO_STATE
  }
  try {
    return (
      STATES_DATA[state][info].map((info)=>
        <p key={state + "_" + info} style={{marginBottom:0}}>{info}</p>
    ))
  } catch (er) {
    return "DATA_RETRIEVE_FAILED"
  }
}

const StateElectionDates = () => {
  const [usState, setUSState] = useState(NO_STATE)

  return (
    <Card id="state-dates">
      <Card.Body>
        <h2 style={{fontSize:"3rem"}}>Voting Info: <span style={{color:"yellow", textTransform:"uppercase"}}>{(usState != NO_STATE) ? usState.replace("_", " ") : "SELECT"}</span></h2>
        <StateSelect onChange={(state) => setUSState(state)} style={{flex:1}} />
        <div style={{marginTop:'1rem', display:(usState == NO_STATE ? "none" : "inherit")}}>
          {getStateInfo(usState,"genInfo")}
          <hr/>
          <h3 style={{marginTop:"1rem", fontSize:"2.1rem"}}>Voter Registration</h3>
          {getStateInfo(usState,"voterRegistrationDeadlines")}
          <hr/>
          {getStateInfo(usState,"absenteeInfo")}
        </div>
      </Card.Body>
    </Card>
  )
}

const StateElectionDatesStatic = ({ state: usState }) => (
  <Card id="state-dates">
    <Card.Body>
      <h2 style={{fontSize:"3rem"}}>Voting Info: <span style={{color:"yellow", textTransform:"uppercase"}}>{(usState != NO_STATE) ? usState.replace("_", " ") : "SELECT"}</span></h2>
      <div style={{marginTop:'1rem', display:(usState == NO_STATE ? "none" : "inherit")}}>
        {getStateInfo(usState,"genInfo")}
        <hr/>
        <h3 style={{marginTop:"1rem", fontSize:"2.1rem"}}>Voter Registration</h3>
        {getStateInfo(usState,"voterRegistrationDeadlines")}
        <hr/>
        {getStateInfo(usState,"absenteeInfo")}
      </div>
    </Card.Body>
  </Card>
)

export { StateElectionDatesStatic }
export default StateElectionDates
