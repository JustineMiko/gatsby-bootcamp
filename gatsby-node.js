// const path à ajouter pour le slug (voir doc node.js path.basename)
const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

//création des slug : 
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const blogPosts = await graphql(`
        query {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
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

    blogPosts.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: path.resolve('./src/templates/blog.js'),
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    // Create your paginated pages
    paginate({
        createPage, // The Gatsby `createPage` function
        items: blogPosts.data.allContentfulBlogPost.edges, // An array of objects
        itemsPerPage: 6, // How many items you want per page
        pathPrefix: '/blogList', // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('./src/templates/blogList.js'), // Just like `createPage()`
    })
};
