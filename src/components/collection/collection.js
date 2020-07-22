import React, { Component } from 'react'
import Breadcrumb from "../breadcrumb"
import StickyBox from "react-sticky-box"
import Filter from "./filter"
import ProductListing from "./product-listing"
import FilterBar from "./filter-bar"
import { sortProducts } from "../../services/functions"

class Collection extends Component {

    state = {
        layoutColumns: 3,
        visibleProducts: [],
        categoryFilters: [],
        tagFilters: [],
        priceFilter: null,
        refreshProductListing: false
    }

    openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }

    componentDidMount = () => {
        // assign products prop to state so we can filter the visible products shown in the collection
        this.setState({
            visibleProducts: this.props.products,
        })
    }

    LayoutViewClicked = (columns) => {
        this.setState({
            layoutColumns: columns
        })
    }

    filterByCategory = (categories) => {
        this.setState({
            categoryFilters: categories
        }, () => this.filterProducts())
    }

    filterByTag = (tags) => {        
        this.setState({
            tagFilters: tags
        }, () => this.filterProducts())
    }

    filterByPrice = (range) => {
        this.setState({
            priceFilter: range
        }, () => this.filterProducts())
    }

    filterProducts = () => {
        // filters the collection using the state filters and updates ProductListing
        const filteredProducts = this.props.products.filter((product) => {
            let categoryMatch = true
            let tagMatch = true
            let startPriceMatch = true
            let endPriceMatch = true

            if(this.state.categoryFilters.length > 0) {
                categoryMatch = this.state.categoryFilters.includes(product.node.product_category?.category)
            }

            if(this.state.tagFilters.length > 0) {
                const tagMatches = product.node.product_tags.map((product_tag) => {
                    return this.state.tagFilters.includes(product_tag.tag)
                })

                tagMatch = tagMatches.reduce((acc, curr) => acc | curr)
            }

            if(this.state.priceFilter) {
                startPriceMatch = this.state.priceFilter.min <= product.node.price
                endPriceMatch = product.node.price <= this.state.priceFilter.max
            }

            return categoryMatch && tagMatch && startPriceMatch && endPriceMatch
        })

        this.setState({
            visibleProducts: filteredProducts,
            refreshProductListing: true
        }, () => {
            this.setState({
                refreshProductListing: false
            })
        })
    }

    filterSort = (value) => {
        const sortedProducts = sortProducts(value, this.state.visibleProducts)

        this.setState({
            visibleProducts: sortedProducts
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb title={'Collection'} />

                <section className="section-b-space">
                    <div className="collection-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 collection-filter">
                                    <StickyBox offsetTop={20} offsetBottom={20}>
                                        <div>
                                            <Filter products={this.props.products} categoryFilter={this.filterByCategory} tagFilter={this.filterByTag} priceFilter={this.filterByPrice} />
                                            {/* <NewProduct/> */}
                                            {/* <div className="collection-sidebar-banner">
                                                <a href="#">
                                                    <img src={`${process.env.BASE_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />
                                                </a>
                                            </div> */}
                                        </div>
                                    </StickyBox>
                                    {/*side-bar banner end here*/}
                                </div>
                                <div className="collection-content col">
                                    <div className="page-main-content ">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="top-banner-wrapper">
                                                        <img src={`${process.env.BASE_URL}/assets/images/mega-menu/collection-banner.jpg`} className="img-fluid" alt=""/>
                                                        <div className="top-banner-content small-section">
                                                            <h3>The James Collection</h3>
                                                            <h5>View all of our products below and use the filtering and sorting options to find just what you need!</h5>
                                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> */}
                                                        </div>
                                                    </div>
                                                    <div className="collection-product-wrapper">
                                                        <div className="product-top-filter">
                                                            <div className="container-fluid p-0">
                                                                <div className="row">
                                                                    <div className="col-xl-12">
                                                                        <div className="filter-main-btn">
                                                                            <span onClick={this.openFilter}
                                                                                onKeyPress={this.openFilter}
                                                                                role="button"
                                                                                tabIndex={0}
                                                                                className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <FilterBar filterSort={this.filterSort} numProducts={this.state.visibleProducts.length} onLayoutViewClicked={(columns) => this.LayoutViewClicked(columns)}/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/*Products Listing Component*/}
                                                        <ProductListing colSize={this.state.layoutColumns} products={this.state.visibleProducts} refresh={this.state.refreshProductListing} />
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
            </div>
        )
    }
}

export default Collection