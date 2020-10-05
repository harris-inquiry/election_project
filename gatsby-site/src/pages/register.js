import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Table } from 'react-bootstrap'
import Banner from "../components/banner"

import { STATES_DATA } from "../data/states"


function stateName(state) {
  return state.replace("_", " ");
}

const RegisterPage = () => {

  const tbody = Object.keys(STATES_DATA).map((state) =>
    <tr>
      <td>{ stateName(state) }</td>
      <td>
        <a target="_blank" href={ STATES_DATA[state].officialLink }>{ STATES_DATA[state].officialLink }</a>
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
        <Table id="register-chart" style={{background:"white", borderRadius:".5rem"}}>
          <thead>
            <th>State</th>
            <th>Official Link</th>
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
