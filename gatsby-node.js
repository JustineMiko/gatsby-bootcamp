// const path à ajouter pour le slug (voir doc node.js path.basename)
const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions

//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
        
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })

    // Fetch your items (blog posts, categories, etc).
    const blogPosts = doSomeMagic();

    // Create your paginated pages
    paginate({
        createPage, // The Gatsby `createPage` function
        items: blogPosts, // An array of objects
        itemsPerPage: 6, // How many items you want per page
        pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('src/pages/blog.js'), // Just like `createPage()`
    })
}