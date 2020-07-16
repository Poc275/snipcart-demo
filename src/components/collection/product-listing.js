import React, { Component } from 'react'
import { Link } from "gatsby"
import ProductThumbnail from "../products/product-thumbnail"
import InfiniteScroll from 'react-infinite-scroll-component'

class ProductListing extends Component {
    constructor (props) {
        super (props)

        this.state = { 
            limit: 5, 
            hasMoreItems: true 
        }
    }

    fetchMoreItems = () => {
        if (this.state.limit >= this.props.products.length) {
            this.setState({ hasMoreItems: false });
            return;
        }

        this.setState({
            limit: this.state.limit + 5
        });
    }

    componentDidUpdate(prevProps) {
        // update hasMoreItems when filtered products changes
        if(prevProps.products.length !== this.props.products.length) {
            if(this.state.limit >= this.props.products.length) {
                this.setState({
                    hasMoreItems: false
                })
            } else {
                this.setState({
                    hasMoreItems: true
                })
            }
        }
    }

    render() {
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        {this.props.products.length > 0 ? 
                            <InfiniteScroll
                                dataLength={this.state.limit} // This is important field to render the next data
                                next={this.fetchMoreItems}
                                hasMore={this.state.hasMoreItems}
                                loader={<div className="loading-cls"></div>}
                                endMessage={
                                    <p className="seen-cls seen-it-cls">
                                        <b>No more products</b>
                                    </p>
                                }
                            >
                                <div className="row">
                                    {this.props.products.slice(0, this.state.limit).map((product, index) =>
                                        <div className={`${this.props.colSize === 3 ? 'col-xl-3 col-md-6 col-grid-box' : 'col-lg-' + this.props.colSize}`} key={index}>
                                            <ProductThumbnail product={product.node} />
                                        </div>)
                                    }
                                </div>
                            </InfiniteScroll>
                            :
                            <div className="row">
                                <div className="col-sm-12 text-center section-b-space mt-5 no-found" >
                                    <img src={`${process.env.BASE_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />
                                    <h3>Sorry! Couldn't find the product you were looking for</h3>
                                    <p>Please check if you have misspelt something or try different filters</p>
                                    {/* <Link to={`/collection`} className="btn btn-solid">continue shopping</Link> */}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductListing