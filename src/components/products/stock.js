import React, { useState, useEffect } from 'react'

const Stock = ({ productId, variants, onStockQtyChange }) => {
    // state for Snipcart API response
    const [stockData, setStockData] = useState({})

    // state for when Snipcart API call completes and data is ready
    const [stockDataReady, setStockDataReady] = useState(false)

    // state for stock level returned to user
    const [stock, setStock] = useState(0)

    // get product from Snipcart API
    useEffect(() => {
        const headers = new Headers({
            'Accept': 'application/json',
            'Authorization': `Basic ${btoa(process.env.SNIPCART_API_KEY)}`
        })

        fetch(`https://app.snipcart.com/api/products/${productId}`, {
            method: 'GET',
            headers: headers
        })
        .then(res => res.json())
        .then((res) => {
            setStockData(res)
            setStockDataReady(true)
        },
        (error) => {
            console.log("Error fetching stock data:", error)
        })
    }, [])

    // update stock when data is ready or variants change
    useEffect(() => {
        getStock()
    }, [stockDataReady, variants])

    // find stock level in Snipcart product JSON for variable products
    const findStockForVariableProducts = () => {
        let matchedVariation = null

        stockData.variants.forEach((snipcartVariant) => {
            const variationMatches = snipcartVariant.variation.map((snipcartVariation) => {
                const matches = variants.map((selectedVariation) => {
                    if(snipcartVariation.name === selectedVariation.name) {
                        if(snipcartVariation.option === selectedVariation.option) {
                            return true
                        }

                        return null
                    }

                    return null
                })

                return matches.includes(true) ? true : false
            })

            let matched = true
            variationMatches.forEach((match) => {
                if(!match) {
                    matched = false
                }
            })

            if(matched) {
                matchedVariation = snipcartVariant
            }
        })

        return matchedVariation
    }

    // find stock level in Snipcart product JSON for products without variations
    const findStockForSimpleProducts = () => {
        return stockData.stock
    }

    // get stock level
    const getStock = () => {
        if(stockDataReady) {
            if(variants.length > 0) {
                const variation = findStockForVariableProducts()
                if(variation) {
                    setStock(variation.stock)
                    // call parent product with updated qty
                    onStockQtyChange(variation.stock)
                }
            } else {
                const stock = findStockForSimpleProducts()
                setStock(stock)
                // call parent product with updated qty
                onStockQtyChange(stock)
            }
        }
    }

    return (
        <p className="instock-cls">
            {stock > 0 ? `In Stock (${stock} remaining)` : 'Out of Stock'}
        </p>
    )
}

export default Stock