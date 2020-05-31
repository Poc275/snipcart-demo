import React from 'react'

const SnipcartButton = ({ data }) => {

    return (
        <button id={data.sku}
                className="snipcart-add-item"
                data-item-id={data.sku}
                data-item-url={process.env.SNIPCART_BASE_URL}
                data-item-price={data.price}
                data-item-name={data.title}
                data-item-description={data.description}
                data-item-image={data.image.childImageSharp.fixed.src}>
            Add to cart
        </button>
    )
}

export default SnipcartButton