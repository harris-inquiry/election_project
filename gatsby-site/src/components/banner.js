import React from "react"
import Image from "./image"
import { Col, Row } from "react-bootstrap"

import GraphicButton from "./graphicButton"


const Banner = ({image, children}) => (
<div className="banner">
  <div className="gradient-banner" style={{zIndex:1}}></div>
  <Image imageName={image} objectPosition="top" style={{height:"100%"}}/>
  <div className="absolute-top-center container" style={{zIndex:2}}>
    {children}
  </div>
  <Row style={{position:"absolute", bottom:10, left:30, right:30, zIndex:1, textAlign:"center"}}>
    <GraphicButton name="Register"/>
    <GraphicButton name="Info" />
    <GraphicButton />
  </Row>
</div>
)

export default Banner
