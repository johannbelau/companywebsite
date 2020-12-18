const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query TextContentPages {
      allContentfulWebPageWithText {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulWebPageWithText.edges.forEach(({ node }) => {

    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/TextContentPageTemplate.js`),
      context: {
        // Data passed to context is available
        lang: 'de',
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulWebPageWithText.edges.forEach(({ node }) => {
    createPage({
      path: `en/${node.slug}`,
      component: path.resolve(`./src/templates/TextContentPageTemplate.js`),
      context: {
        // Data passed to context is available
        lang: 'en',
        slug: node.slug,
      },
    })
  })
}