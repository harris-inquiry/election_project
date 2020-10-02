import React, { useState } from "react"
import { Collapse } from "react-bootstrap"


const ComparisonTableRow = ({ topic, democrat, republican  }) => {
  const [open, setOpen] = useState(false);

  return (
    <tr onClick={() => setOpen(!open)} style={{cursor:"pointer"}}>
      <td className="dem">
        YES
        <Collapse in={open}>
          <div className="more-info">
            <p>{democrat}</p>
          </div>
        </Collapse>
      </td>
      <td className="topic">{topic}</td>
      <td className="rep">
        NO
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
