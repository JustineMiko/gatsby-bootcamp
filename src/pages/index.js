import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'

import blogStyles from './blog.module.scss'
import indexStyles from './index.module.scss'

const IndexPage = () => {

  const blogPostSample = useStaticQuery(graphql`
    query ($skip: Int=0, $limit: Int=6) {
      allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, skip: $skip, limit: $limit) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "D/M/YYYY")
          }
        }
      },
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "NOTRE EXPERTISE"}}}) {
        edges {
          node {
            frontmatter {
              title
              paragraph
            }
            html
          }
        }
      }
    }
  `) 

  return (
    <Layout>
    <div className={indexStyles.backgroundImage}>
        <h2 className={indexStyles.title}>Votre Expert en Market Place</h2>
        <div>
          <ol className={indexStyles.services}>
            {blogPostSample.allMarkdownRemark.edges.map((md) => 
            <li className={indexStyles.services__content}>
              <h3>{md.node.frontmatter.title}</h3>
              <p>{md.node.frontmatter.paragraph}</p>
            </li>
            )}
          </ol>
        </div>
    </div>
      <ol className={blogStyles.posts}>
        {blogPostSample.allContentfulBlogPost.edges.map((edge) => {
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