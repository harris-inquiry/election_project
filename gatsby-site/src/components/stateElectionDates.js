import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"

import StateSelect from "../components/stateSelect"
import { STATE_OFFICIAL_LINKS, NO_STATE } from "../data/states"


const stateList = Object.keys(STATE_OFFICIAL_LINKS)
const dateData = {
  voterRegistration: "[REGISTRATION::OBJECT:DATE]",
  requestAbsentee: function(state){
    return "[" + state + "_ABSENTEE::OBJECT:DATE]"
  },
  returnAbsentee: function(state){
    return "[" + state + "_ABSENTEE::OBJECT:DATE]"
  }
}

function officialWebsite(usState) {
  if( usState === NO_STATE ){
    return "#"
  }
  return STATE_OFFICIAL_LINKS[usState]
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
      <h2>State Info: {usState.replace("_", " ")}</h2>
      <div style={{display:"flex"}}>
        <StateSelect onChange={(evt) => changeUSState(evt.target.value)} style={{width:"100%"}} />
        <Button href={officialWebsite(usState)}>More</Button>
      </div>
      <div style={{marginTop:'1rem', display:displayStateInfo}}>
        <h3>Voter Registration</h3>
        <p>{dateData.voterRegistration}</p>
        <hr/>
        <p><strong>Deadline to Request an Absentee Ballot</strong></p>
        <p>{dateData.requestAbsentee(usState)}</p>
        <p><strong>Deadline to Return an Absentee Ballot</strong></p>
        <p>{dateData.returnAbsentee(usState)}</p>
      </div>
    </Card.Body>
  </Card>
  )
 }

export default StateElectionDates
