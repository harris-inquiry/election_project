import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Row, Col, Container, Card } from 'react-bootstrap'
import Banner from "../components/banner"
import InfoCard from "../components/infoCard.js"
import GeneralElectionInfo from "../components/generalElectionInfo"
import StateSelect from "../components/stateSelect"
import StateElectionDates from "../components/stateElectionDates.js"


const IndexPage = () => (
  <Layout>
    <SEO title="Vote" description="Vote today!"/>
    <Banner image="americanFlag">
      <Row>
        <div className="col-md-6 container bg-black" style={{margin:'auto 0'}}>
          <h1 className="hero-text">Vote!</h1>
          <h4 className="sub-hero-text">For some reason...</h4>
        </div>
        <div className="col-md-6">
          <p className="header-quote" style={{ fontSize:"1.4rem", textAlign:"right"}}>
            The only thing necessary for the triumph of <span style={{color:"red"}}>evil</span> is for good men and women to do <span style={{color:"yellow"}}>nothing</span>
          </p>
        </div>
      </Row>
    </Banner>

    <Container>
      <Row>
        <Col md={5} style={{paddingRight:"10px"}}>
          <GeneralElectionInfo/>
        </Col>
        <Col xs={{ order:"first" }} md style={{paddingLeft:"10px"}}>
          <StateElectionDates/>
        </Col>
      </Row>
    </Container>

    <Container style={{marginBottom:"2rem"}}>
      <InfoCard className="featurette" topic="registerToVote"/>
      <InfoCard className="featurette" topic="absenteeVoting"/>
      <InfoCard className="featurette" topic="voteByMail"/>
      <InfoCard className="featurette" topic="earlyVoting"/>
      <InfoCard className="featurette" topic="idLaws"/>
    </Container>

  </Layout>
)

export default IndexPage
