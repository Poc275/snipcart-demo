import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProductThumbnail from './product-thumbnail'

// TODO - Add related products to Strapi and finish component
class RelatedProducts extends Component {
    render() {
        return (
            <StaticQuery 
                query={graphql`
                query RelatedProductsQuery {
                    allStrapiProduct(limit: 6) {
                      edges {
                        node {
                          id
                          title
                          price
                          image {
                            childImageSharp {
                              fixed(height: 400) {
                                ...GatsbyImageSharpFixed
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `}
                render={data => (
                    <section className="section-b-space">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 product-related">
                                    <h2>you may also like</h2>
                                </div>
                            </div>
                            <div className="row search-product">
                                {data.allStrapiProduct.edges.map((product, index) => (
                                    <div key={index} className="col-xl-2 col-md-4 col-sm-6">
                                        <ProductThumbnail product={product.node} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            />
        )
    }
}

export default RelatedProducts