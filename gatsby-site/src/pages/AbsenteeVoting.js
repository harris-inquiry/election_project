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
        <a href={STATES_DATA[state].officialLink} target="_blank">{ state.replace("_", " ") + ".gov"}</a>
      </td>
      <td>
        {STATES_DATA[state].absenteeInfo.map((info) => {
          const start = info.indexOf(":")
          if( start > 0 ){
            return (
              <p style={{marginBottom:0}}><strong>{info.slice(0,start)}</strong>{info.slice(start)}</p>
            )
          } else {
            return (
              <p style={{marginBottom:0}}>{info}</p>
          )}
        }
        )}
      </td>
    </tr>
  )

  return (
    <Layout>
      <SEO title="Absentee Voting" description="Vote By Mail"/>
      <Banner image="americanFlag">
        <h1 className="hero-text" style={{fontSize:"5rem"}}>Absentee Voting Info</h1>
      </Banner>

      <Container>
        <div style={{margin:"2rem auto"}}>
          <h1>By State</h1>
          <p>Vote by Mail</p>
        </div>
        <Table style={{background:"white", borderRadius:".5rem"}}>
          <thead>
            <th>State</th>
            <th>Absentee Voting</th>
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
