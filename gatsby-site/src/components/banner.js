import React from "react"
import Image from "./image"


const pages = {
  home: {
    title: "Vote!",
    image: "americanFlag",
    paragraph: `The leaders we elect make decisions that affect our daily lives. Elections are our chance to stand up for what matters most to us and to have an impact on the issues that affect us, our communities, our families and our future.`,
    quote: `The only thing necessary for the triumph of evil is for good men to do nothing`
  },
  page2: {
    title: "Page2",
    image: "declarationInd",
    paragraph: ``,
    quote: ``
  }
}

const Banner = ({page}) => (
<div className="banner">
  <div className="gradient-banner" style={{zIndex:1}}></div>
  <Image imageName={pages[page].image} objectPosition="top" style={{height:"100%"}}/>
  <div className="absolute-top-center container row margin-auto" style={{zIndex:2}}>
    <div className="col-lg-6 container bg-black" style={{margin:'auto 0'}}>
      <h1 className="display-4 hero-text">{pages[page].title}</h1>
      <p className="lead hero-text">{pages[page].paragraph}</p>
    </div>
    <div className="col-lg-6">
      <p style={{ fontSize: "30px", textAlign:"right"}}>"{pages[page].quote}"</p>
    </div>
  </div>
</div>
)

export default Banner
