import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Card, Table} from 'react-bootstrap'
import Banner from "../components/banner"

import { STATES_DATA } from "../data/states"


const EarlyVoting = () => {

  const all_state_early_voting = Object.keys(STATES_DATA).map((state) =>
    <tr key={state}>
      <td>
        <h3>{ state.replace("_", " ") }</h3>
        {/* <a href={STATES_DATA[state].officialLink} target="_blank">{ state.replace("_", " ") + ".gov" }</a> */}
      </td>
      <td>
        {STATES_DATA[state].genInfo.map((info, key) => {
          const start = info.indexOf(":")
          if( start > 0 ){
            return (
              <p key={state + "_info" + key}><strong>{info.slice(0,start)}</strong>{info.slice(start)}</p>
            )
          } else {
            return (
              <p key={state + "_info" + key}>{info}</p>
          )}
        }
        )}
      </td>
    </tr>
  )

  return (
    <Layout>
      <SEO title="EarlyVoting" description="Vote Early"/>
      <Banner image="americanFlag">
        <h1 className="hero-text" style={{fontSize:"5rem"}}>Early Voting Info</h1>
      </Banner>

      <Container>
        <div style={{margin:"2rem auto"}}>
          <h2 style={{fontSize:"3rem"}}>Early Voting By State</h2>
          <h4 style={{position:"relative", top:-10, color:"#6c757d"}}>Check your State's Early Voting Dates.</h4>
          <p>Sometimes circumstances make it hard or impossible for you to vote on Election Day. But your state may let you vote during a designated early voting period.
            For Early Voting location listings check with the Secretary of State’s office or County Registrar in your state.</p>
        </div>
        <Table className="state-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {all_state_early_voting}
          </tbody>
        </Table>
      </Container>
    </Layout>
  )
}

export default EarlyVoting
