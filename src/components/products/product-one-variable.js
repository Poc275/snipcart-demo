import React, { useState } from 'react'
import SnipcartStatefulButton from './snipcart-stateful-button'
import Select from 'react-select'
import Stock from './stock'

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
        <>
            <div className="col-lg-8 rtl-text">
                <div className="product-right">
                    <div className="product-description border-product">
                        <h2>{data.title}</h2>

                        <div className="border-product">
                            <h6 className="product-title">product details</h6>
                            <p>{data.description}</p>

                            <h6 className="product-title mt-3">materials</h6>
                            <p>{data.primary_material} 
                                {data.secondary_material === "null" ? null : " | " + data.secondary_material} 
                                {data.tertiary_material === "null" ? null : " | " + data.tertiary_material}
                            </p>
                        </div>

                        <h6 className="product-title size-text">select {data.variations[0].name}</h6>
                        <Select defaultValue={variationOneOptions[0]} options={variationOneOptions} onChange={(e) => setSelectedVariationOne(e.value)} />
                    </div>
                </div>
            </div>

            <div className="col-lg-4 rtl-text">
                <div className="product-right">
                    <h3>£{data.price.toFixed(2)} </h3>

                    <div className="product-description border-product">
                        <Stock productId={data.sku} 
                            variants={[{'name': data.variations[0].name, 'option': selectedVariationOne}]} 
                        />

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
                    </div>

                    <div className="product-buttons">
                        <p><i className="fa fa-ship" aria-hidden="true"></i> Free Shipping Worldwide</p>
                        <p><i className="fa fa-truck" aria-hidden="true"></i> Delivery: 3-5 days</p>
                    </div>

                    <div className="border-product">
                        <h6 className="product-title">share it</h6>
                        <div className="product-icon">
                            <ul className="product-social">
                                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                            {/* <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i
                                className="fa fa-heart"></i><span
                                className="title-font">Add To WishList</span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductOneVariable
