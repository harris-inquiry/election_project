import React from "react"
import PropTypes from "prop-types"

import { Form } from "react-bootstrap"
import { STATE_OFFICIAL_LINKS, NO_STATE } from "../data/states"

const stateList = Object.keys(STATE_OFFICIAL_LINKS)

const StateSelect = ({onChange, style}) => (
  <Form style={style}>
    <Form.Group controlId="stateSelectForm">
      <Form.Label srOnly>State Select</Form.Label>
      <Form.Control defaultValue={NO_STATE} as="select" custom
                    onChange={onChange}>
        <option className="text-black" value={NO_STATE}>--Select State--</option>
        {stateList.map((state) =>
          <option value={state} key={state}>{state.replace("_", " ")}</option>)
        }
      </Form.Control>
    </Form.Group>
  </Form>
)

StateSelect.defaultProps = {
  onChange: () => {},
}

export default StateSelect