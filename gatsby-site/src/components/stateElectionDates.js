import React from "react"
import { Card } from "react-bootstrap"

import StateSelect from "../components/stateSelect"
import { STATE_OFFICIAL_LINKS } from "../data/states"


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

const StateElectionDates = () => (
  <Card>
    <Card.Body>
      <h2>State Info</h2>
      <StateSelect />
      <h3>Voter Registration</h3>
      <p>{dateData.voterRegistration}</p>
      <hr/>
      <p><strong>Deadline to Request an Absentee Ballot</strong></p>
      <p>{dateData.requestAbsentee("STATE")}</p>
      <p><strong>Deadline to Return an Absentee Ballot</strong></p>
      <p>{dateData.returnAbsentee("STATE")}</p>
    </Card.Body>
  </Card>
)

export default StateElectionDates
