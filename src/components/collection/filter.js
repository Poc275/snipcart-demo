import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import SlideToggle from 'react-slide-toggle';

class Filter extends Component {
    constructor(props) {
        super(props);

        let maxPrice = 0
        this.props.products.forEach((product) => {
            if(product.node.price > maxPrice) {
                maxPrice = product.node.price
            }
        })

        this.state = {
            openFilter: false,
            priceRange: {
                min: 0,
                max: maxPrice
            }
        }
    }

    closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    clickCategoryHandle(event, categories) {
        const index = categories.indexOf(event.target.value)

        if(event.target.checked) {
            categories.push(event.target.value)
        } else {
            categories.splice(index, 1)
        }

        this.props.categoryFilter(categories)
    }

    clickTagHandle(event, tags) {
        const index = tags.indexOf(event.target.value)

        if(event.target.checked) {
            tags.push(event.target.value)
        } else {
            tags.splice(index, 1)
        }

        this.props.tagFilter(tags)
    }

    clickPriceRange(range) {
        this.setState({ 
            priceRange: range
        }, () => this.props.priceFilter(range))
    }

    render() {
        const filteredCategories = []
        const filteredTags = []

        const categories = []
        this.props.products.forEach((product) => {
            if(categories.indexOf(product.node.category) === -1) {
                categories.push(product.node.category)
            }
        })
        const tags = []
        this.props.products.forEach((product) => {
            if(tags.indexOf(product.node.tags) === -1) {
                tags.push(product.node.tags)
            }
        })

        return (
            <div className="collection-filter-block">
                <div className="collection-mobile-back">
                    <span className="filter-back" onClick={(e) => this.closeFilter(e)} >
                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                    </span>
                </div>

                { /* category filter */}
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block">
                            <h3 className="collapse-block-title" onClick={onToggle}>filter by category</h3>
                            <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                <div className="collection-brand-filter">
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clickCategoryHandle(e, filteredCategories)} value={category} 
                                                        defaultChecked={filteredCategories.includes(category) ? true : false} className="custom-control-input" id={category} />
                                                    <label className="custom-control-label" htmlFor={category}>{category}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>

                { /* tags filter */}
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block">
                            <h3 className="collapse-block-title" onClick={onToggle}>filter by tag</h3>
                            <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                <div className="collection-brand-filter">
                                    {
                                        tags.map((tag, index) => {
                                            return (
                                                <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>
                                                    <input type="checkbox" onClick={(e) => this.clickTagHandle(e, filteredTags)} value={tag} 
                                                        defaultChecked={filteredTags.includes(tag) ? true : false} className="custom-control-input" id={tag} />
                                                    <label className="custom-control-label" htmlFor={tag}>{tag}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>

                {/*price filter */}
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block open">
                            <h3 className="collapse-block-title" onClick={onToggle}>filter by price</h3>
                            <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                <div className="collection-brand-filter">
                                    <div className="custom-control custom-checkbox collection-filter-checkbox">
                                        <InputRange
                                            minValue={this.state.priceRange.minPrice}
                                            maxValue={this.state.priceRange.maxPrice}
                                            value={this.state.priceRange}
                                            onChange={value => this.clickPriceRange(value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>
            </div>
        )
    }
}

export default Filter