import React from 'react'

// Snipcart button component that manages state
const SnipcartStatefulButton = ({ disabled, data, selections, qty }) => {

    const getVariations = () => {
        return data.variations.map((variation) => {
            return variation.options.map((variant) => {
                return variant.value
            })
        })
    }

    // check number of variations to set correct number of custom attributes
    if(selections.length === 0) {
        return (
            <button id={data.sku}
                    className="snipcart-add-item btn btn-solid"
                    disabled={disabled}
                    data-item-id={data.sku}
                    data-item-url={process.env.BASE_URL + "product/" + data.id}
                    data-item-price={data.price}
                    data-item-name={data.title}
                    data-item-description={data.summary}
                    data-item-image={data.image.childImageSharp.fixed.src}
                    data-item-quantity={qty}>
                Add to cart
            </button>
        )
    } else if(selections.length === 1) {
        return (
            <button id={data.sku}
                    className="snipcart-add-item btn btn-solid"
                    disabled={disabled}
                    data-item-id={data.sku}
                    data-item-url={process.env.BASE_URL + "product/" + data.id}
                    data-item-price={data.price}
                    data-item-name={data.title}
                    data-item-description={data.summary}
                    data-item-image={data.image.childImageSharp.fixed.src}
                    data-item-quantity={qty}
                    data-item-custom1-name={data.variations[0].name}
                    data-item-custom1-options={getVariations()[0].join('|')}
                    data-item-custom1-value={selections[0]}
                    data-item-custom1-required='true'>
                Add to cart
            </button>
        )
    } else if(selections.length === 2) {
        return (
            <button id={data.sku}
                    className="snipcart-add-item btn btn-solid"
                    disabled={disabled}
                    data-item-id={data.sku}
                    data-item-url={process.env.BASE_URL + "product/" + data.id}
                    data-item-price={data.price}
                    data-item-name={data.title}
                    data-item-description={data.summary}
                    data-item-image={data.image.childImageSharp.fixed.src}
                    data-item-quantity={qty}
                    data-item-custom1-name={data.variations[0].name}
                    data-item-custom1-options={getVariations()[0].join('|')}
                    data-item-custom1-value={selections[0]}
                    data-item-custom1-required='true'
                    data-item-custom2-name={data.variations[1].name}
                    data-item-custom2-options={getVariations()[1].join('|')}
                    data-item-custom2-value={selections[1]}
                    data-item-custom2-required='true'>
                Add to cart
            </button>
        )
    } else {
        return <button disabled={true}>Too many variables</button>
    }
}

export default SnipcartStatefulButton