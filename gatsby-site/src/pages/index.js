import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Row, Col, Container } from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    <SEO title="Vote" description="Vote today!"/>
    <Container>
    <Row>
      <Col>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="page-2" className="btn btn-primary">Go somewhere</Link>
          </div>
        </div>
      </Col>
      <Col>
        <h2>Here's some more</h2>
        <Image imageName="americanFlag"/>
      </Col>
    </Row>
    </Container>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
