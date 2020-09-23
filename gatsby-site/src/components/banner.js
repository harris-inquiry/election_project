import React from "react"
import Image from "./image"


const Banner = ({image, children}) => (
<div className="banner">
  <div className="gradient-banner" style={{zIndex:1}}></div>
  <Image imageName={image} objectPosition="top" style={{height:"100%"}}/>
  <div className="absolute-top-center container" style={{zIndex:2}}>
    {children}
  </div>
</div>
)

export default Banner
