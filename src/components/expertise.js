import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Expertise = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "NOTRE EXPERTISE"}}}) {
                edges {
                  node {
                    frontmatter {
                      title
                    }
                    html
                  }
                }
              }
            }
        `);

    return (
        <>
        {data.allMarkdownRemark.edges.map((edge) => { 
            return (
                <div>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <h3>{edge.node.html}</h3>
                </div>
            )
        })}
        </>
    )
}

export default Expertise