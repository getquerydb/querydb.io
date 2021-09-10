const path = require('path')

exports.createPages = ({ actions: { createPage }, graphql }) => {
  return graphql(`
  {
    TextPages: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/pages/text_pages/" }
        frontmatter: { path: { ne: null } }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.TextPages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/TextPage.jsx'),
        context: {},
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        data: path.resolve(__dirname, 'src/data'),
        scss: path.resolve(__dirname, 'src/scss'),
      },
    },
  })
}
