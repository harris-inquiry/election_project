import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Row, Col, Container, Card, Button} from 'react-bootstrap'
import Banner from "../components/banner"
import InfoCard from "../components/infoCard.js"
import GeneralElectionInfo from "../components/generalElectionInfo"

const Links = {
  leagueWV: "https://www.lwv.org/",
  vote411: "https://www.vote411.org/",
  rockTheVote: "https://www.rockthevote.org",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Resources" description="Get involved"/>
    <Banner image="americanFlag">
      <h2>How you can get involved</h2>
    </Banner>

    <Container>
      <h2 className="text-centered">Tell your friends</h2>
      <Button>Share</Button>
    </Container>
    <br/>

    <Container>
      <Card>
        <Card.Body>
          <Row>
            <Col lg="4" md="6">
              <a href={Links.leagueWV}><Image imageName="lwvLogo"/></a>
            </Col>
            <Col>
              <a href={Links.leagueWV}><h3>League of Women Voters</h3></a>
              <p>The League is proud to be nonpartisan, neither supporting nor opposing candidates or political parties at any level of government, but always working on vital issues of concern to members and the public.</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>

      <Card>
        <Card.Body>
          <Row>
            <Col lg="4" md="6" md={{order:2}}>
              <a href={Links.vote411}><Image imageName="vote411" /></a>
            </Col>
            <Col>
              <a href={Links.vote411}><h3>Vote411</h3></a>
              <p>Launched by the League of Women Voters Education Fund (LWVEF) in October of 2006, VOTE411.org is a "one-stop-shop" for election related information. It provides nonpartisan information to the public with both general and state-specific information on the following aspects of the election process</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>

      <Card>
        <Card.Body>
          <Row>
            <Col lg="4" md="6">
              <a href={Links.rockTheVote}><Image imageName="rockTheVote"/></a>
            </Col>
            <Col>
              <a href={Links.rockTheVote}><h3>Rock the Vote</h3></a>
              <p>Rock the Vote is the most trusted and effective nonpartisan nonprofit dedicated to building the political power of young people</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>

    </Container>

  </Layout>
)

export default IndexPage
