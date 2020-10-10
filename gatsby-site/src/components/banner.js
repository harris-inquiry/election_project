import React from "react"
import { Row, Container} from "react-bootstrap"

import GraphicButton from "./graphicButton"
import Image from "./image"
import StateFlags from "./state_flags.js"


function BasicGraphicButtons() {
  return (
    <Row className="justify-content-end banner-buttons">
      <GraphicButton className="col-md-2 col-6" title="Home" to="/" icon="home" />
      <GraphicButton className="col-md-2 col" title="Register" to="/register" />
      <GraphicButton className="col-md-2 col-6" title="Early Voting" to="/EarlyVoting" />
      <GraphicButton className="col-md-2 col" title="Absentee Voting" to="/AbsenteeVoting" />
    </Row>
  )
}


const Banner = ({image, children}) => (
  <div className="banner">
    <div className="gradient-banner" ></div>
    <Image className="banner-image" imageName={image} imgStyle={{ objectPosition:"top" }} />
    <Container className="absolute-top-center" style={{zIndex:1}}>
      {children}
      {BasicGraphicButtons()}
    </Container>
  </div>
)


const StateBanner = ({ state, children }) => {
  return (
    <div className="banner">
      <div className="gradient-banner"/>
      <StateFlags className="banner-image" imageName={state} imgStyle={{ objectPosition:"top" }} />
      <Container className="absolute-top-center" style={{zIndex:1}}>
        {children}
        {BasicGraphicButtons()}
      </Container>
    </div>
  )
}

export { StateBanner }
export default Banner
