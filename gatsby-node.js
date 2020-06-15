/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

// create a new page for each product
exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions

    // createPages requires a promise
    return new Promise(resolve => {
        graphql(`
            {
                allStrapiProduct(filter: {shops: {elemMatch: {title: {eq: "demo_shop_one"}}}}) {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allStrapiProduct.edges.forEach(({node}) => {
                createPage({
                    path: `/product/${node.id}`,
                    component: path.resolve('./src/pages/product.js'),
                    context: {
                        productId: node.id
                    },
                })
            })
            resolve()
        })
    })
}