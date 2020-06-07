import React, { useState } from 'react'
import SnipcartStatefulButton from './snipcart-stateful-button'
import Select from 'react-select'

const ProductOneVariable = ({ data }) => {
    const initialVariationOne = data.variations[0].options[0].value
    const [selectedVariationOne, setSelectedVariationOne] = useState(initialVariationOne)
    const [qty, setQty] = useState(1)

    const variationOneOptions = data.variations[0].options.map((variant) => {
        return {
            value: variant.value,
            label: variant.value
        }
    })

    return (
        <div className="col-lg-6 rtl-text">
            <div className="product-right">
                <h2>{data.title}</h2>
                <h3>£{data.price.toFixed(2)} </h3>

                <div className="product-description border-product">
                    <div>
                        <h6 className="product-title size-text">select {data.variations[0].name}</h6>
                    </div>
                    
                    <Select defaultValue={variationOneOptions[0]} options={variationOneOptions} onChange={(e) => setSelectedVariationOne(e.value)} />

                    <p className="instock-cls">{'InStock'}</p>
                    <h6 className="product-title">quantity</h6>
                    <div className="qty-box">
                        <div className="input-group">
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-left-minus" onClick={(e) => setQty(qty === 1 ? qty : qty - 1)} data-type="minus" data-field="">
                                    <i className="fa fa-angle-left"></i>
                                </button>
                            </span>
                            <input type="text" name="quantity" value={qty} onChange={setQty} className="form-control input-number" />
                            <span className="input-group-prepend">
                                <button type="button" className="btn quantity-right-plus" onClick={(e) => setQty(qty + 1)} data-type="plus" data-field="">
                                    <i className="fa fa-angle-right"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="product-buttons">
                    <SnipcartStatefulButton data={data} selections={[selectedVariationOne]} qty={qty} />
                    {/* <a className="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity)}>add to cart</a> */}
                    {/* <Link to={`/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >buy now</Link> */}
                </div>

                <div className="border-product">
                    <h6 className="product-title">product details</h6>
                    <p>{data.summary}</p>
                </div>

                <div className="border-product">
                    <h6 className="product-title">share it</h6>
                    <div className="product-icon">
                        <ul className="product-social">
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://plus.google.com/discover" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        {/* <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i
                            className="fa fa-heart"></i><span
                            className="title-font">Add To WishList</span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductOneVariable
