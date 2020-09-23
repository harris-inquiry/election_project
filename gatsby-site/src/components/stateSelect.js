import React from "react"
import { Form } from "react-bootstrap"
import { STATE_OFFICIAL_LINKS } from "../data/states"

const stateList = Object.keys(STATE_OFFICIAL_LINKS)

const StateSelect = () => (
  <Form>
    <Form.Group controlId="stateSelectForm">
      <Form.Label srOnly>State Select</Form.Label>
      <Form.Control as="select" custom>
        <option selected className="text-black" value="US_all">--Select State--</option>
        {stateList.map((state) =>
          <option value={state} key={state}>{state.replace("_", " ")}</option>)
        }
      </Form.Control>
    </Form.Group>
  </Form>
)

export default StateSelect
