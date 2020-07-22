import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import Slider from 'react-slick'
// import ImageZoom from '../components/common/image-zoom'
// import SmallImages from '../components/common/small-images'
import ProductDetailTabs from '../components/products/product-detail-tabs'
import RelatedProducts from '../components/products/related-products'
import Product from '../components/products/product'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

class ProductPage extends Component {

    constructor() {
        super()
        this.state = {
            nav1: null,
            nav2: null
        }
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        })
    }

    render() {
        // get product data from page query
        // (available from this.props.data)
        const product = this.props.data.allStrapiProduct.edges[0].node

        // const productsNav = {
        //     slidesToShow: 3,
        //     slidesToScroll: 1,
        //     swipeToSlide: true,
        //     draggable: true,
        //     focusOnSelect: true
        // }

        // const holzkernStyleNav = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 3,
        //     slidesToScroll: 1
        // }

        const customPagingSettings = {
            className: "center",
            centerMode: true,
            centerPadding: "0px",
            customPaging: function(i) {
                return (
                    <img src={product.product_gallery[i].image.childImageSharp.fluid.src} alt="product gallery slider paging icon" />
                )
            },
            dots: true,
            dotsClass: "slick-dots slick-thumb",
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }

        // check if product exists as it's undefined during build which throws an error
        if(product) {
            return (
                <Layout>
                    <SEO title={product.title} />

                    <Breadcrumb title={product.title} parent='collection' />

                    <section>
                        <div className="collection-wrapper">
                            <div className="container">
                                {/* <div className="row">
                                    <div className="col-lg-6 product-thumbnail">
                                        <Slider {...product} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="product-slick">
                                            {product.product_gallery.map((vari, index) =>
                                                <div key={index}>
                                                    <ImageZoom image={vari.image.childImageSharp.fixed.src} className="img-fluid image_zoom_cls-0" />
                                                </div>
                                            )}
                                        </Slider>
                                        <SmallImages product={product} settings={productsNav} navOne={this.state.nav1} />
                                    </div>
                                    <Product data={product} />
                                </div> */}

                                <div className="row">
                                    <div className="col">
                                        <Slider {...customPagingSettings} className="product-slick" ref={slider => (this.slider = slider)}>
                                            {product.product_gallery.map((vari, index) =>
                                                <div key={index}>
                                                    {/* <ImageZoom image={vari.image.childImageSharp.fixed.src} className="img-fluid image_zoom_cls-0" /> */}
                                                    <Img fixed={vari.image.childImageSharp.fixed} className="img-fluid image_zoom_cls-0" alt={product.title} />
                                                </div>
                                            )}
                                        </Slider>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>

                    <section className="tab-product m-0">
                        <div className="container">
                            <div className="row mt-5">
                                <Product data={product} sliderRef={this.slider} />
                            </div>
                        </div>
                    </section>

                    <section className="tab-product m-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <ProductDetailTabs product={product} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <RelatedProducts />
                </Layout>
            )
        } else {
            return null
        }
    }
}

export default ProductPage

// get the full product information, only the product id is assigned 
// to the page context in gatsby-node (productId) to limit the amount 
// of information passed around during build.
// Page context keys that match with arguments in the page query (productId in this case) 
// will be used as variables if they are prefixed with a '$':
// https://www.gatsbyjs.org/docs/page-query/#how-to-add-query-variables-to-a-page-query
export const query = graphql`
    query GetProduct($productId: String) {
        allStrapiProduct(filter: {id: {eq: $productId}}) {
            edges {
                node {
                    id
                    weight
                    packed_weight
                    variable
                    title
                    summary
                    sku
                    price
                    description
                    image {
                        childImageSharp {
                            fixed {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    variations {
                        name
                        options {
                            description
                            value
                            galleryIndex
                        }
                        displayable
                    }
                    dimensions
                    product_gallery {
                        image {
                            childImageSharp {
                                fixed(height: 460) {
                                    ...GatsbyImageSharpFixed
                                }
                                fluid(maxWidth: 60) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    primary_material
                    secondary_material
                    tertiary_material
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