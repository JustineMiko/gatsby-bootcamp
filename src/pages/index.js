import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import Layout from '../components/layout'

import blogStyles from './blog.module.scss'
import indexStyles from './index.module.scss'




const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query ($skip: Int=0, $limit: Int=6) {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, skip: $skip, limit: $limit) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "D/M/YYYY")
          }
        }
      }
    }
  `)

    

  return (
    <Layout>
    <div className={indexStyles.backgroundImage}>
        <h2>Votre Expert en Market Place</h2>
    </div>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <Link to={`/blog/${edge.node.slug}`}>
              <li className={blogStyles.post}>
                <h3>{edge.node.title}</h3>
                <p>{edge.node.publishedDate}</p>
              </li> 
            </Link> 
          )
        })}
      </ol>

    </Layout>
  )
}

export default IndexPage