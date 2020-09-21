import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"

const Jumbotron = () => (
<div className="jumbotron">
  <Image className="harrisonTest" imageName="americanFlag" />
  <div className="container row margin-auto" >
    <div className="col-lg-6 container bg-black" style={{margin:'auto 0'}}>
      <h1 className="display-4 hero-text">Vote!</h1>
      <p className="lead hero-text">The leaders we elect make decisions that affect our daily lives. Elections are our chance to stand up for what matters most to us and to have an impact on the issues that affect us, our communities, our families and our future.</p>
    </div>
    <div className="col-lg-6">
      <p style={{ fontSize: "30px", textAlign:"right"}}>"The only thing necessary for the triumph of evil is for good men to do nothing"</p>
      {/*<img className="img-fluid" src="images/I-voted-sticker.png" style={{width:'50%'}} />*/}
    </div>
  </div>
</div>
)

export default Jumbotron
