import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Card} from 'react-bootstrap'
import Banner from "../components/banner"
import InfoCard from "../components/infoCard"
import GeneralElectionInfo from "../components/generalElectionInfo"
import StateElectionDates from "../components/stateElectionDates"
import Image from "../components/image"


const taglines = ["Smart", "Confident", "Safe"]


function getNewTagline(oldTagLine){
  return taglines[(taglines.indexOf(oldTagLine) + 1) % taglines.length];
}


const IndexPage = () => {
  const [tagline, setTagline] = useState(taglines[0])

  useEffect(() => {
    const i = setInterval(() => {
      setTagline(prevTag => getNewTagline(prevTag))
    }, 2000 )
    return () => clearInterval(i)
  }, [])


  return (
    <Layout>
      <SEO title="Home" description="Vote today!"/>
      <Banner image="americanFlag">
        <Row className="banner-body">
          <Col md>
            <h1 className="hero-text" style={{fontSize:"10rem", lineHeight:0.8}}>Vote</h1>
            <span id="hero-phrase">{tagline}</span>
          </Col>
          <Col md="5" className="calendar-col">
            <div className="calendar">Tuesday, November 3rd</div>
          </Col>
        </Row>
      </Banner>

      <Container>
        <StateElectionDates/>

        <Row style={{margin:"4rem -15px"}}>
          <Col md={6}>
            <Card style={{height:"100%"}}>
              <Image className="featurette-image" imageName="womenSuffrage"/>
              <Card.Body>
                <h4>On the Issues</h4>
                <Card.Text>
                  Learn about the issues this November
                </Card.Text>
                <Link to="/Issues" className="btn btn-primary btn-lg">Learn More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{height:"100%"}}>
              <Image imageName="votefriends" />
              <Card.Body>
                <h4>Other Resources</h4>
                <Card.Text>
                  Find out how you can help
                </Card.Text>
                <Link to="/resources" className="btn btn-primary btn-lg">Learn More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="featurettes" style={{margin:"2rem auto"}}>
        <h2 style={{fontSize:"4rem", fontWeight:200}}>Learn More</h2>
        <InfoCard className="featurette">
          <Row>
            <Col md="4" lg="3"><h4>Register to Vote</h4></Col>
            <Col>
              <p>Each state makes its own voting and election rules, including when and how to register. Check with your state or local election office to get the most detailed and up-to-date information for where you live.</p>
              <p>Every state except North Dakota requires citizens to register if they want to become voters. Depending on your state, the registration deadline could be as much as a month before an election.</p>
            </Col>
          </Row>
        </InfoCard>
        <InfoCard className="featurette">
          <Row>
            <Col md="4" lg="3"><h4>Absentee Voting / Vote by Mail</h4></Col>
            <Col>
              <p>Absentee voting (aka “mail-in voting” and “by-mail voting”) is conducted by mail-in ballot before the day of Election Day. All states will mail a ballot to voters if certain conditions are met. The voter may return the ballot in person or by mail. Some states will let voters apply for an absentee ballot in person before Election Day and then vote the ballot that same day.</p>
            </Col>
          </Row>
        </InfoCard>
        <InfoCard className="featurette">
          <Row>
            <Col md="4" lg="3"><h4>Early Voting</h4></Col>
            <Col>
              <p>Sometimes circumstances make it hard or impossible for you to vote on Election Day. But your state may let you vote during a designated early voting period.
                <strong> Please note: Your state's rules and voting dates may change in 2020 due to the coronavirus pandemic</strong></p>
              <ul>
                <li>Most states have early voting. This lets registered voters vote on specified dates before Election Day.</li>
                <li>You don't need an excuse to vote early.</li>
                <li>In some states, you may cast an absentee ballot in person before Election Day. To do this, you must request an absentee ballot from your state. Your state may require you to submit a valid excuse too.</li>
              </ul>
            </Col>
          </Row>
        </InfoCard>
        <InfoCard className="featurette">
          <Row>
            <Col md="4" lg="3"><h4>Voter ID laws</h4></Col>
            <Col>
              <p>A total of 36 states have laws requesting or requiring voters to show some form of identification at the polls, 35 of which are in force in 2020. The remaining 14 states use other methods to verify the identity of voters. Most frequently, other identifying information provided at the polling place, such as a signature, is checked against information on file.</p>
              <p>Check with your state's requirements.</p>
            </Col>
          </Row>
        </InfoCard>
      </Container>
    </Layout>
  )
}

export default IndexPage
