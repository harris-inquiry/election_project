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
  <Banner page="home" />

  <GeneralElectionInfo/>

  <InfoCard topic="registerToVote" />
  <br/>
  <InfoCard topic="absenteeVoting"/>
  <br/>
  <InfoCard topic="voteByMail"/>
  <br/>
  <InfoCard topic="earlyVoting"/>
  <br/>
  <InfoCard topic="idLaws"/>
  <br/>

</Layout>
)

export default IndexPage
