import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from 'react-bootstrap'
import Banner from "../components/banner"
import InfoCard from "../components/infoCard.js"
import GeneralElectionInfo from "../components/generalElectionInfo"
import StateElectionDates from "../components/stateElectionDates.js"


const taglines = ["Confidence", "Safety", "Reliability", "etc"]


const IndexPage = () => {
  const [tagline, setTagline] = useState("Confidence")

  /* const i = setInterval(() => {
   *   let newLoc = taglines.indexOf(tagline) + 1;
   *   if( newLoc >= taglines.length ){
   *     setTagline(taglines[0]);
   *   } else {
   *     setTagline(taglines[newLoc]);
   *   }
   * }, 2000 ) */


  return (
    <Layout>
      <SEO title="Vote" description="Vote today!"/>
      <Banner image="americanFlag">
        <Row>
          <div className="col-md-6 container bg-black" style={{margin:'auto 0'}}>
            <h1 className="hero-text">Vote!</h1>
            <p id="sub-hero-text">With...</p>
            <p id="hero-phrase">{tagline}</p>
          </div>
          <div className="col-md-6">
            <p className="header-quote">
              The only thing necessary for the triumph of <span style={{color:"red"}}>evil</span> is for good men and women to do <span style={{color:"yellow"}}>nothing</span>
            </p>
          </div>
        </Row>
      </Banner>

      <Container>
        <Row>
          <Col md >
            <StateElectionDates/>
          </Col>
          <Col id="genElectionInfo" md={5}>
            <GeneralElectionInfo/>
          </Col>
        </Row>
      </Container>

      <Container style={{marginBottom:"2rem"}}>
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
            <Col md="4" lg="3"><h4>Absentee Voting</h4><h4>+ Vote By Mail</h4></Col>
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
            <Col md="4" lg="3"><h4>ID laws</h4></Col>
            <Col><p>Other stuff</p></Col>
          </Row>
        </InfoCard>
      </Container>
    </Layout>
  )
}

export default IndexPage
