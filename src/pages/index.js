import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => {

  return (
    <Layout>
      <h1>Test</h1>
      <h2>Ceci est un test gatsby</h2>
      <p>Need a developper? <Link to="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default IndexPage