import React, { useState } from 'react'
import Img from 'gatsby-image'
import SnipcartStatefulButton from './snipcart-stateful-button'
import Gallery from './gallery'

const ProductTwoVariables = ({ data }) => {
    const initialVariationOne = data.variations[0].options[0].value
    const [selectedVariationOne, setSelectedVariationOne] = useState(initialVariationOne)

    const initialVariationTwo = data.variations[1].options[0].value
    const [selectedVariationTwo, setSelectedVariationTwo] = useState(initialVariationTwo)

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
            <p>{data.variations[0].name}  
                <select id={data.variations[0].name} onChange={(e) => setSelectedVariationOne(e.target.value)} value={selectedVariationOne}>
                    {
                        data.variations[0].options.map((variant) => (
                            <option key={variant.value}>{variant.value}</option>
                        ))
                    }
                </select>
            </p>

            <p>{data.variations[1].name}  
                <select id={data.variations[1].name} onChange={(e) => setSelectedVariationTwo(e.target.value)} value={selectedVariationTwo}>
                    {
                        data.variations[1].options.map((variant) => (
                            <option key={variant.value}>{variant.value}</option>
                        ))
                    }
                </select>
            </p>

            <SnipcartStatefulButton data={data} selections={[selectedVariationOne, selectedVariationTwo]} />
        </div>
    )
}

export default ProductTwoVariables
