import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"


export default function StateInfo({data:{ file }}) {
  console.log(file)

  return (
    <Layout>
      <SEO title={ file.name } />
      <Banner image="americanFlag">
        <p>Hello</p>
      </Banner>
      <div style={{ height: 500}}>
        <h1>{ file.name }</h1>
        <p>Some information on { file.name } in { file.relativePath }</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    file: file(name: {eq: $slug}) {
      name
      relativePath
    }
  }
`

