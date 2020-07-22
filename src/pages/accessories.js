import React, {Component} from 'react';
import './index.scss'

import Layout from "../components/layout"
import Breadcrumb from '../components/breadcrumb'
import SEO from '../components/seo'
import FilterBar from "../components/collection/filter-bar"
import ProductListing from "../components/collection/product-listing"
import { sortProducts } from "../services/functions"

class Accessories extends Component {
    state = {
        layoutColumns: 3,
        products: []
    }

    componentDidMount = () => {
        this.setState({
            products: this.props.data.allStrapiProduct.edges
        })
    }

    LayoutViewClicked(columns) {
        this.setState({
            layoutColumns: columns
        })
    }

    filterSort = (value) => {
        const sortedProducts = sortProducts(value, this.state.products)

        this.setState({
            products: sortedProducts
        })
    }

    render() {
        return (
            <Layout>
                <SEO title="Accessories" />

                <Breadcrumb title={'Accessories'} />

                {/*Section Start*/}
                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="collection-content col">
                                    <div className="page-main-content">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="top-banner-wrapper">
                                                        <img src={`${process.env.BASE_URL}/assets/images/mega-menu/collection-banner.jpg`} className="img-fluid" alt="summer collection now in" />
                                                        <div className="top-banner-content small-section">
                                                            <h4>accessories by james</h4>
                                                            {/* <h5>View our clothing range below</h5> */}
                                                            <p>View our accessories range below</p>
                                                        </div>
                                                    </div>
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar filterSort={this.filterSort} numProducts={this.state.products.length} onLayoutViewClicked={(columns) => this.LayoutViewClicked(columns)} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-wrapper-grid">
                                                            <div className="container-fluid">
                                                                <div className="row">
                                                                    <ProductListing colSize={this.state.layoutColumns} products={this.state.products} refresh={false} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Section End*/}
            </Layout>
        )
    }
}

export default Accessories

export const query = graphql`
    query GetAccessories {
        allStrapiProduct(filter: {product_category: {category: {eq: "Accessories"}}}) {
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
`