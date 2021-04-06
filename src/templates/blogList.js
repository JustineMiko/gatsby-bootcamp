import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

import blogStyles from './blogList.module.scss'


export const query = graphql`
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
`

const BlogPage = (props) => {



    return (
        <Layout>
            <h1>Blog Skip {props.pageContext.skip}</h1>
            <ol className={blogStyles.posts}>
                {props.data.allContentfulBlogPost.edges.map((edge) => {
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

            <div>
                {/* {blogSample.allContentfulBlogPost.edges.map(edge => <PostItem item={edge.node}/>)} */}
                <div>
                    {/* previousPageLink and nextPageLink were added by the plugin */ }
                    <Link to={props.pageContext.previousPagePath}>Previous</Link>
                    <Link to={props.pageContext.nextPagePath}>Next</Link>
                </div>
            </div>

        </Layout>
    )
}


export default BlogPage