import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import Slider from 'react-slick'
import ImageZoom from '../components/common/image-zoom'
import SmallImages from '../components/common/small-images'
import ProductDetailTabs from '../components/products/product-detail-tabs'
import RelatedProducts from '../components/products/related-products'
import Product from '../components/products/product'

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
        // pageContext is retrieved from the context property in createPage() (see gatsby-node.js)
        const { product } = this.props.pageContext

        const productsNav = {
            slidesToShow: 3,
            slidesToScroll:1,
            swipeToSlide:true,
            draggable:true,
            focusOnSelect: true
        }

        return (
            <Layout>
                <SEO title={product.title} />

                <Breadcrumb title={'Product / '+ product.title} />

                <section >
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
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
                            </div>
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
    }
}

export default ProductPage