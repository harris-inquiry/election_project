import React from "react"
import { Card } from "react-bootstrap"

const Topics = {
  default: {
    title: "Default Title",
    text: "Text Description"
  },
  registerToVote: {
    title: "Register to Vote",
    text: "Register to Vote now"
  },
  absenteeVoting: {
    title: "Absentee Voting",
    text: "Absentee"
  },
  voteByMail: {
    title: "Vote By Mail",
    text: "Mail mail"
  },
  earlyVoting: {
    title: "Early Voting",
    text: "Voting Early"
  },
  idLaws: {
    title: "Id Laws",
    text: "Learn about ID laws"
  }
}

const InfoCard = ({topic, className, children}) => {
  if( Topics[topic] == undefined ){
    topic = 'default'
  }

  return (
    <Card className={className}>
      <svg className="card-img-top" style={{height:"30px"}}>
        <rect width="100%" height="100%" style={{fill:"crimson"}}/>
        <polygon points="15.15, 1.52 6.06, 30.00 28.79, 11.82 1.52, 11.82 24.24, 30.00" style={{fill:"white"}}/>
      </svg>
      <Card.Body>
        <h4>{Topics[topic].title}</h4>
        <p>{Topics[topic].text}</p>
        {children}
      </Card.Body>
    </Card>
  )
}

export default InfoCard
