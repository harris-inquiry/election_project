import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"

import StateSelect from "../components/stateSelect"
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


const StateElectionDates = () => {
  const [usState, setUSState] = useState(NO_STATE)
  const [displayStateInfo, setDisplayState] = useState("none")

  function changeUSState(newUSState) {
    if( newUSState !== NO_STATE ) {
      setDisplayState("inherit")
    } else {
      setDisplayState("none")
    }
    setUSState(newUSState)
  }

  return (
    <Card style={{height:"100%"}}>
      <Card.Body>
        <h2 style={{fontSize:"3rem"}}>State Info</h2>
        <div style={{display:"flex"}}>
          <StateSelect onChange={(evt) => changeUSState(evt.target.value)} style={{width:"100%"}} />
          <Button size="lg" href={getStateLink(usState)} target="_blank" style={{display:displayStateInfo}} >More</Button>
        </div>
        <div style={{marginTop:'1rem', display:displayStateInfo}}>
          <h3>{usState.replace("_", " ")}</h3>
          {getStateInfo(usState,"genInfo")}
          <h4 style={{marginTop:"1rem"}}>Voter Registration</h4>
          {getStateInfo(usState,"voterRegistrationDeadlines")}
          <hr/>
          {getStateInfo(usState,"absenteeInfo")}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StateElectionDates
