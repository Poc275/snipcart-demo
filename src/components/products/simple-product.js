import React, { useState } from 'react'
import Img from 'gatsby-image'
import SnipcartButton from './snipcart-button'
import Gallery from './gallery'

const SimpleProduct = ({ data }) => {
    return (
        <div key={data.id} style={{ margin: "1rem 0", border: "1px solid rgba(0, 0, 0, 0.15)", padding: "20px" }}>
            <Img fixed={data.image.childImageSharp.fixed} />
            <Gallery gallery={data.product_gallery} />
            <h3>{data.title}</h3>
            <h5>Summary: {data.summary}</h5>
            <p>Description: {data.description}</p>
            <p>£{data.price.toFixed(2)}</p>
            <p>Categories: {data.category}</p>
            <p>Tags: {data.tags}</p>
            <p>Weight: {data.weight}g</p>
            <p>Dimensions: {data.dimensions}</p>

            <SnipcartButton data={data} />
        </div>
    )
}

export default SimpleProduct
