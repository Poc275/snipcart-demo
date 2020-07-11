import React, { useState } from 'react'
import './variation.scss'

const ImageVariation = ({ variations, gallery, sliderRef, snipcartSelectionFunc }) => {

    const [selectedVariation, setSelectedVariation] = useState(0)

    const selectVariation = (galleryIndex, selectedIndex) => {
        setSelectedVariation(selectedIndex)
        sliderRef.slickGoTo(galleryIndex)
        snipcartSelectionFunc(variations.options[selectedIndex].value)
    }

    const variationItems = variations.options.map((variation, idx) => (
        <li key={variation.value}
            className={idx === selectedVariation ? 'variation selected' : 'variation'}
            title={variation.description === "" ? variation.value : variation.description}
            onClick={(e) => selectVariation(variation.galleryIndex, idx)}>
                <img src={gallery[variation.galleryIndex].image.childImageSharp.fluid.src} />
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

export default ImageVariation