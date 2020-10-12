import React, { useState } from "react"
import { Collapse } from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"


const ComparisonTableRow = ({ topic, democrat, republican  }) => {
  const [open, setOpen] = useState(false);

  return (
    <tr onClick={() => setOpen(!open)} style={{ cursor:"pointer" }}>
      <td className="dem padding-small" style={{ background: open ? "#0000ae" : "" }}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} style={{fontSize:"2rem"}} />YES
        </div>
        <Collapse in={open}>
          <div className="more-info">
            <p>{democrat}</p>
          </div>
        </Collapse>
      </td>
      <td className="topic">{topic}</td>
      <td className="rep padding-small" style={{ background: open ? "#ff0000" : "" }}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          NO<FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} style={{fontSize:"2rem"}} />
        </div>
        <Collapse in={open}>
          <div className="more-info">
            <p>{republican}</p>
          </div>
        </Collapse>
      </td>
    </tr>
  )
}


ComparisonTableRow.defaultProps = {
  topic: "Views",
  democrat: "Fusce suscipit, wisi nec facilisis facilisis, est dui fermentum leo, quis tempor ligula erat quis odio",
  republican: "Etiam vel tortor sodales tellus ultricies commodo. Nunc porta vulputate tellus."
}

export default ComparisonTableRow
