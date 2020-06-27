import React, { useEffect } from 'react'

// Snipcart button component that manages state
const SnipcartStatefulButton = ({ disabled, data, selections, qty }) => {

    // set snipcart custom values (product variations)
    // this hook updates whenever the selections props gets updated 
    // in a parent product component
    useEffect(() => {
        const snipcartBtn = document.getElementById(data.sku)
        const variations = data.variations.map((variation) => {
            return variation.options.map((variant) => {
                return variant.value
            })
        })

        // Snipcart variations are set as 'data-item-custom1-___', 'data-item-custom2-___' etc.
        // Variations are provided as a single string separated by a pipe
        variations.forEach((variation, idx) => {
            snipcartBtn.setAttribute('data-item-custom' + (idx + 1) + '-name', data.variations[idx].name)
            snipcartBtn.setAttribute('data-item-custom' + (idx + 1) + '-options', variation.join('|'))
            snipcartBtn.setAttribute('data-item-custom' + (idx + 1) + '-value', selections[idx])
            snipcartBtn.setAttribute('data-item-custom' + (idx + 1) + '-required', 'true')
        })
    }, [selections, data.sku, data.variations])

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

export default SnipcartStatefulButton