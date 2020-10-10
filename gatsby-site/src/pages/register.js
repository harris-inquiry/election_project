import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Table } from 'react-bootstrap'
import Banner from "../components/banner"

import { STATES_DATA } from "../data/states"


const RegisterPage = () => {

  const tbody = Object.keys(STATES_DATA).map((state) =>
    <tr key={state + "_tableRow"}>
      <td>
        <h3>{ state.replace("_", " ") }</h3>
        <a href={STATES_DATA[state].officialLink} target="_blank">{ state.replace("_", " ") + ".gov"}</a>
      </td>
      <td>
        {STATES_DATA[state].voterRegistrationDeadlines.map((info, index) =>
          <p key={state + "_info_" + index}>{info}</p>
        )}
      </td>
    </tr>
  )


  return (
    <Layout>
      <SEO title="Register" description="Register to vote"/>
      <Banner image="americanFlag">
        <h1 className="hero-text" style={{fontSize:"5rem"}}>Register to Vote</h1>
      </Banner>

      <Container>
        <div style={{margin:"1rem auto"}}>
          <h2 style={{fontSize:"3rem"}}>Register to Vote Now!</h2>
          <h4 style={{position:"relative", top:-10, color:"#6c757d"}}>You can't vote if you're not registered</h4>
          <p>Each state makes its own voting and election rules, including when and how to register. Check with your state or local election office to get the most detailed and up-to-date information for where you live.</p>
          <p>Every state except North Dakota requires citizens to register if they want to become voters. Depending on your state, the registration deadline could be as much as a month before an election.</p>
        </div>
        <Table className="state-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Registration</th>
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </Table>
      </Container>

    </Layout>
  )
}

export default RegisterPage
