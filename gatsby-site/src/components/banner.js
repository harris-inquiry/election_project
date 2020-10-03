import React from "react"
import Image from "./image"
import { Row, Container} from "react-bootstrap"

import GraphicButton from "./graphicButton"


const Banner = ({image, children}) => (
  <div className="banner">
    <div className="gradient-banner" style={{zIndex:1}}></div>
    <Image imageName={image} objectPosition="top" style={{height:"100%"}}/>
    <Container className="absolute-top-center" style={{zIndex:1}}>
      {children}
      <Row className="justify-content-end banner-buttons">
        <GraphicButton className="col-md-2 col" title="Register" to="/register" />
        <GraphicButton className="col-md-2 col" title="Info" to="/why_vote" />
        <GraphicButton className="col-md-2 col" title="Resources" to="/resources" />
      </Row>
    </Container>
  </div>
)

export default Banner
