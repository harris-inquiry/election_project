import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Card, Table} from 'react-bootstrap'
import Banner from "../components/banner"

import { STATES_DATA } from "../data/states"


const EarlyVoting = () => {

  const all_state_early_voting = Object.keys(STATES_DATA).map((state) =>
    <tr key={state}>
      <td><a href={STATES_DATA[state].officialLink} target="_blank">{ state.replace("_", " ") }</a></td>
      <td>
        {STATES_DATA[state].genInfo.map((info) => {
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
      <SEO title="EarlyVoting" description="Vote Early"/>
      <Banner image="americanFlag">
        <h1 className="hero-text" style={{fontSize:"5rem"}}>Early Voting Info!</h1>
      </Banner>

      <Container>
        <div style={{margin:"2rem auto"}}>
          <h1>By State</h1>
          <p>Want to Vote Early? Check your State's Early Voting Dates.</p>
          <p>For Early Voting location listings check with the Secretary of State’s office or County Registrar in your state.</p>
        </div>
        <Table style={{background:"white", borderRadius:".5rem"}}>
          <thead>
            <th>State</th>
            <th>Info</th>
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
