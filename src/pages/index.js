import React from "react"
// import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.scss'
import MainHomePage from "../components/main-home-page"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
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
