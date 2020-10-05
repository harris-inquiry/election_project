import React from "react"
import Image from "./image"
import { Row, Container} from "react-bootstrap"

import GraphicButton from "./graphicButton"


const Banner = ({image, children}) => (
  <div className="banner">
    <div className="gradient-banner" ></div>
    <Image className="banner-image" imageName={image} objectPosition="top" />
    <Container className="absolute-top-center" style={{zIndex:1}}>
      {children}
      <Row className="justify-content-end banner-buttons">
        <GraphicButton className="col-md-2 col" title="Home" to="/" />
        <GraphicButton className="col-md-2 col" title="Register" to="/register" />
        <GraphicButton className="col-md-2 col" title="Early Voting" to="/EarlyVoting" />
        <GraphicButton className="col-md-2 col" title="Absentee Voting" to="/AbsenteeVoting" />
      </Row>
    </Container>
  </div>
)

export default Banner
