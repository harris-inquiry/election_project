import React from "react"
import { Card, Container } from "react-bootstrap"

const Topics = {
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

const InfoCard = ({topic}) => (
<Container>
  <Card >
    <Card.Body>
      <Card.Title>{Topics[topic].title}</Card.Title>
      <Card.Text>{Topics[topic].text}</Card.Text>
    </Card.Body>
  </Card>
</Container>
)

export default InfoCard
