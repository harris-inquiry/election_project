import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

import Image from "../components/image.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"

const WhyVote = () => (
  <Layout>
    <SEO title="Why Vote" />
    <Banner page="page2"/>
    <Container>
      <div className="featurette">
        <h1 className="featurette-heading">Go Vote</h1>
        <h6 style={{color:"grey"}}>(Text taken from LWV)</h6>
        <p>Voting is a sacred right. For nearly 100 years, we have fought to protect the rights of eligible voters and expand access for those who’ve been left out of our democratic process. Our volunteers spearhead efforts to enact common-sense voting reforms and we are the first to fight back when voters’ rights are threatened. We protect millions of voters every year through aggressive advocacy and education efforts and we have been at the forefront of major voting rights court cases over the last decade.</p>
      </div>
    </Container>
    <hr className="featurette-divider" />
    <Container>
      <div className="featurette">
        <Image imageName="womenSuffrage"/>
        <h1 className="featurette-heading">Celebrating 100 Years</h1>
        <h6 style={{color:"grey"}}>(Text taken from LWV)</h6>
        <p>The first province in the world to award and maintain women’s suffrage (the right to vote) continuously, was Wyoming Territory, of the U.S., in 1869, and the first sovereign nation was Norway in 1913. In the U.S. women won the right to vote when the 19 th Amendment to the U.S. Constitution was passed in 1920 – 100 years ago. Since that time women have surpassed men as the largest, most important, block of registered voters in the U.S.</p>
      </div>
    </Container>
    <hr className="featurette-divider" />
    <Container>
      <div className="featurette">
        <Image imageName="mlkVotingRights"/>
        <h1 className="featurette-heading">Voting Rights Act</h1>
        <h6 style={{color:"grey"}}>(Text taken from LWV)</h6>
        <p>The Voting Rights Act of 1965 is a landmark piece of federal legislation in the United States that prohibits racial discrimination in voting. Rev. Martin Luther King, Jr., perhaps the leading advocate of the bill is congratulated here by President Lyndon Johnson after signing the bill into law.</p>
      </div>
    </Container>
    <hr className="featurette-divider" />

  </Layout>
)

export default WhyVote
