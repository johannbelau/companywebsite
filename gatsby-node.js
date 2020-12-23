const path = require(`path`);

function getPageSlug (lang) {
  if (lang === 'en') {
    return ''
  }
  return '/de'
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query TextContentPages {
      allContentfulWebPageWithText {
        edges {
          node {
            slug
            node_locale
          }
        }
      }
      allContentfulServicePage {
        edges {
          node {
            slug
            node_locale
          }
        }
      }
      allContentfulLandingPage {
        edges {
          node {
            slug
            node_locale
          }
        }
      }
      allContentfulSmallPage {
        edges {
          node {
            slug
            node_locale
          }
        }
      }
    }
  `)
  result.data.allContentfulWebPageWithText.edges.forEach(({ node }) => {
    
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(`./src/templates/TextContentPageTemplate.js`),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulWebPageWithText.edges.forEach(({ node }) => {
   
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(`./src/templates/TextContentPageTemplate.js`),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulServicePage.edges.forEach(({ node }) => {
    
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(`./src/templates/ServiceTemplate.js`),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulServicePage.edges.forEach(({ node }) => {
    
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(`./src/templates/ServiceTemplate.js`),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulLandingPage.edges.forEach(({ node }) => {
    
    let template = `./src/templates/PageTemplate.js`;
    
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(template),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulLandingPage.edges.forEach(({ node }) => {
    let template = `./src/templates/PageTemplate.js`;
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(template),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })
  

  result.data.allContentfulSmallPage.edges.forEach(({ node }) => {
    
    let template = `./src/templates/SmallPage.js`;
    
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(template),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

  result.data.allContentfulSmallPage.edges.forEach(({ node }) => {
    
    let template = `./src/templates/SmallPage.js`;
   
    createPage({
      path: `${getPageSlug(node.node_locale)}${node.slug}`,
      component: path.resolve(template),
      context: {
        // Data passed to context is available
        lang: node.node_locale,
        slug: node.slug,
      },
    })
  })

}