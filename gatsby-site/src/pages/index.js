import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Row, Col, Container, Card } from 'react-bootstrap'
import Banner from "../components/banner"
import InfoCard from "../components/infoCard.js"
import GeneralElectionInfo from "../components/generalElectionInfo"


const IndexPage = () => (
  <Layout>
    <SEO title="Vote" description="Vote today!"/>
    <Banner image="americanFlag">
      <Row>
        <div className="col-md-6 container bg-black" style={{margin:'auto 0'}}>
          <h1 className="display-4 hero-text">Vote!</h1>
        </div>
        <div className="col-md-6">
          <p style={{ fontSize: "30px", textAlign:"right"}}>The only thing necessary for the triumph of evil is for good men to do nothing</p>
        </div>
      </Row>
    </Banner>

    <GeneralElectionInfo/>
    <Container>
      <InfoCard topic="registerToVote"/ >
        <br/>
        <InfoCard topic="absenteeVoting"/>
        <br/>
        <InfoCard topic="voteByMail"/>
        <br/>
        <InfoCard topic="earlyVoting"/>
        <br/>
        <InfoCard topic="idLaws"/>
        <br/>
    </Container>

  </Layout>
)

export default IndexPage
