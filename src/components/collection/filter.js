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
            },
            minPrice: 0,
            maxPrice: maxPrice,
            filteredCategories: [],
            filteredTags: []
        }
    }

    closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    clickCategoryHandle(event) {
        if(event.target.checked) {
            this.setState({
                filteredCategories: [...this.state.filteredCategories, event.target.value]
            }, () => this.props.categoryFilter(this.state.filteredCategories))
        } else {
            this.setState({
                filteredCategories: this.state.filteredCategories.filter((category) => {
                    return category !== event.target.value
                })
            }, () => this.props.categoryFilter(this.state.filteredCategories))
        }
    }

    clickTagHandle(event, tags) {
        if(event.target.checked) {
            this.setState({
                filteredTags: [...this.state.filteredTags, event.target.value]
            }, () => this.props.tagFilter(this.state.filteredTags))
        } else {
            this.setState({
                filteredTags: this.state.filteredTags.filter((tag) => {
                    return tag !== event.target.value
                })
            }, () => this.props.tagFilter(this.state.filteredTags))
        }
    }

    clickPriceRange(range) {
        this.setState({ 
            priceRange: range
        }, () => this.props.priceFilter(range))
    }

    render() {
        // const filteredCategories = []
        // const filteredTags = []

        const categories = []
        this.props.products.forEach((product) => {
            if(product.node.product_category?.category) {
                if(categories.indexOf(product.node.product_category?.category) === -1) {
                    categories.push(product.node.product_category.category)
                }
            }
        })

        const tags = []
        this.props.products.forEach((product) => {
            product.node.product_tags.forEach((product_tag) => {
                if(tags.indexOf(product_tag.tag) === -1) {
                    tags.push(product_tag.tag)
                }
            })
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
                                                    <input type="checkbox" onClick={(e) => this.clickCategoryHandle(e)} value={category} 
                                                        defaultChecked={this.state.filteredCategories.includes(category) ? true : false} className="custom-control-input" id={category} />
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
                                                    <input type="checkbox" onClick={(e) => this.clickTagHandle(e)} value={tag} 
                                                        defaultChecked={this.state.filteredTags.includes(tag) ? true : false} className="custom-control-input" id={tag} />
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
                                            minValue={this.state.minPrice}
                                            maxValue={this.state.maxPrice}
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