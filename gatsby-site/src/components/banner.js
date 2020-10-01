import React from "react"
import Image from "./image"
import { Col, Row } from "react-bootstrap"

import GraphicButton from "./graphicButton"


const Banner = ({image, children}) => (
  <div className="banner">
    <div className="gradient-banner" style={{zIndex:1}}></div>
    <Image imageName={image} objectPosition="top" style={{height:"100%"}}/>
    <div className="absolute-top-center container" style={{zIndex:1}}>
      {children}
      <Row className="justify-content-end banner-buttons">
        <GraphicButton className="col-lg-2 col-md-3 col" title="Register" to="/" />
        <GraphicButton className="col-lg-2 col-md-3 col" title="Info" to="/why_vote" />
        <GraphicButton className="col-lg-2 col-md-3 col" title="Resources" to="/resources" />
      </Row>
    </div>
  </div>
)

export default Banner
