import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/products/product"

import './index.scss'
import MainHomePage from "../components/main-home-page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

    {/* <p>Items in basket: <span className="snipcart-items-count"></span></p>
    <p>Basked total: <span className="snipcart-total-price"></span></p>
    <button className="snipcart-checkout">Go to Checkout</button> */}

    {/* <hr /> */}

    <MainHomePage />

    {/* {
      data.allStrapiProduct.edges.map(product => (
        <Product key={product.node.id} data={product.node} />
      ))
    } */}
  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`
// {
//   allStrapiProduct(filter: {shops: {elemMatch: {title: {eq: "demo_shop_one"}}}}) {
//     edges {
//       node {
//         id
//         weight
//         variable
//         title
//         summary
//         sku
//         price
//         description
//         image {
//           childImageSharp {
//             fixed {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//         variations {
//           name
//           options {
//             description
//             value
//           }
//         }
//         category
//         dimensions
//         tags
//         product_gallery {
//           image {
//             childImageSharp {
//               fixed {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `
