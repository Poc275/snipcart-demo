import React, { useState } from 'react'
import './variation.scss'

const TextVariation = ({ variations, snipcartSelectionFunc }) => {

    const [selectedVariation, setSelectedVariation] = useState(0)

    const selectVariation = (selectedIndex) => {
        setSelectedVariation(selectedIndex)
        snipcartSelectionFunc(variations.options[selectedIndex].value)
    }

    const variationItems = variations.options.map((variation, idx) => (
        <li key={variation.value}
            className={idx === selectedVariation ? 'text-variation selected' : 'text-variation'}
            title={variation.value}
            onClick={(e) => selectVariation(idx)}>
                {variation.value}
        </li>
    ))

    return (
        <>
            <h6 className="product-title size-text">
                select {variations.name}: <span className="selected-title">{variations.options[selectedVariation].value}</span>
            </h6>
            <ul>{variationItems}</ul>
        </>
    )
}

export default TextVariation