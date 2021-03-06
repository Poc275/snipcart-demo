import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/collection/collection"

const CollectionPage = ({ data }) => (
  <Layout>
    <SEO title="James Collection" />
    <Collection products={data.allStrapiProduct.edges} />
  </Layout>
)

export default CollectionPage

export const pageQuery = graphql`
{
  allStrapiProduct(filter: {shops: {elemMatch: {title: {eq: "demo_shop_one"}}}}) {
    edges {
      node {
        id
        weight
        variable
        title
        summary
        sku
        price
        description
        image {
          childImageSharp {
            fixed(height: 460) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        variations {
          name
          options {
            description
            value
          }
        }
        dimensions
        product_gallery {
          image {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        product_category {
          category
        }
        product_tags {
          tag
        }
      }
    }
  }
}
`
