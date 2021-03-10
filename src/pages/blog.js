import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Pager from '../components/pager'
import Layout from '../components/layout'

import blogStyles from './blog.module.scss'



const BlogPage = ({ pageContext }) => {

    const blogSample = useStaticQuery(graphql`
        query ($skip: Int=0, $limit: Int=6) {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, skip: $skip, limit: $limit) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"D/M/YYYY")
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {blogSample.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            <Pager pageContext={pageContext} />
        </Layout>
    )
}

BlogPage.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
}

export default BlogPage