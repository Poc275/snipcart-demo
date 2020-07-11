import React from 'react'
import SimpleProduct from "./simple-product"
import ProductOneVariable from "./product-one-variable"
import ProductTwoVariables from "./product-two-variables"

// Product is a container for either a simple or variable product
const Product = ({ data, sliderRef }) => {
    let productDetail = null;

    // see if we're creating a variable or simple product
    if(data.variable) {
        switch(data.variations.length) {
            case 1:
                productDetail = <ProductOneVariable key={data.id} data={data} sliderRef={sliderRef} />
                break

            case 2:
                productDetail = <ProductTwoVariables key={data.id} data={data} sliderRef={sliderRef} />
                break

            default:
                break
      }
    } else {
        productDetail = <SimpleProduct key={data.id} data={data} />
    }

    return (
        <>{productDetail}</>
    )
}

export default Product