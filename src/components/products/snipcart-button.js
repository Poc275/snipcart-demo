import React from 'react'

const SnipcartButton = ({ disabled, data, qty }) => {

    return (
        <button id={data.sku}
                className="snipcart-add-item btn btn-solid"
                disabled={disabled}
                data-item-id={data.sku}
                data-item-url={process.env.BASE_URL + "product/" + data.id}
                data-item-price={data.price}
                data-item-name={data.title}
                data-item-description={data.description}
                data-item-image={data.image.childImageSharp.fixed.src}
                data-item-quantity={qty}>
            Add to cart
        </button>
    )
}

export default SnipcartButton