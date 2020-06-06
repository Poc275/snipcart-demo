import React, { Component } from 'react'
import ProductThumbnail from "../products/product-thumbnail"

class ProductListing extends Component {
    constructor (props) {
        super (props)

        this.state = { 
            limit: 5, 
            hasMoreItems: true 
        }
    }

    render() {
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        <div className="row">
                            {this.props.products.slice(0, this.state.limit).map((product, index) =>
                                <div className={`${this.props.colSize===3 ? 'col-xl-3 col-md-6 col-grid-box' : 'col-lg-' + this.props.colSize}`} key={index}>
                                    <ProductThumbnail product={product.node} />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductListing