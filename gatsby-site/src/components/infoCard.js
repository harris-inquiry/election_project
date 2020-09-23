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

const InfoCard = ({topic, children}) => {
  if( Topics[topic] == undefined ){
    topic = 'default'
  }

  return (
    <Card >
      <Card.Body>
        <h4>{Topics[topic].title}</h4>
        <p>{Topics[topic].text}</p>
        {children}
      </Card.Body>
    </Card>
  )
}

export default InfoCard
