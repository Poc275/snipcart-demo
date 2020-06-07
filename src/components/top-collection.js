import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductThumbnail from "./products/product-thumbnail"
import Slider from 'react-slick'

// component which displays a collection of the best selling products
const sliderProps = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow:2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const TopCollection = () => (
    <StaticQuery
        query={graphql`
        {
            allStrapiProduct(filter: {shops: {elemMatch: {title: {eq: "demo_shop_one"}}}}, limit: 4) {
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
                        category
                        dimensions
                        tags
                        product_gallery {
                            image {
                                childImageSharp {
                                    fixed {
                                        ...GatsbyImageSharpFixed
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        `}
        render={data => (
            <div>
                <div className="title1 section-t-space">
                    <h4>Browse</h4>
                    <h2 className="title-inner1">best sellers</h2>
                </div>

                <section className="section-b-space p-t-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...sliderProps} className="product-4 product-m no-arrow">
                                    {
                                        data.allStrapiProduct.edges.map((product, index) => (
                                            <div key={index}>
                                                {/* <Product key={product.node.id} data={product.node} /> */}
                                                <ProductThumbnail product={product.node} />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )}
    ></StaticQuery>
)

export default TopCollection
