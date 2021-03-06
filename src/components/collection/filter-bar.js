import React, { Component } from 'react'

class FilterBar extends Component {

    //List Layout View
    listLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:0";
        document.querySelector(".product-wrapper-grid").style = "opacity:0.2";
        document.querySelector(".product-wrapper-grid").classList.add("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-12');
        });
        setTimeout(function(){
            document.querySelector(".product-wrapper-grid").style = "opacity: 1";
        }, 500);
    }

    //Grid Layout View
    gridLayout(){
        document.querySelector(".collection-grid-view").style = "opacity:1";
        document.querySelector(".product-wrapper-grid").classList.remove("list-view");
        var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
        [].forEach.call(elems, function(el) {
            el.className = '';
            el.classList.add('col-lg-3');
        });
    }

    // Layout Column View
    LayoutView = (colSize) =>{
        if(!document.querySelector(".product-wrapper-grid").classList.contains("list-view")) {
            var elems = document.querySelector(".infinite-scroll-component .row").childNodes;
            [].forEach.call(elems, function(el) {
                el.className = '';
                el.classList.add('col-lg-'+colSize);
            });
        }

        this.props.onLayoutViewClicked(colSize);
    }

    render() {
        return (
            <div className="product-filter-content">
                <div className="search-count">
                    <h5>Showing Products 1-{this.props.numProducts}</h5>
                </div>

                <div className="collection-view">
                    <ul>
                        <li>
                            <i className="fa fa-th grid-layout-view" 
                               onClick={this.gridLayout} 
                               onKeyPress={this.gridLayout}
                               role="button"
                               tabIndex={0}></i>
                        </li>
                        <li>
                            <i className="fa fa-list-ul list-layout-view" 
                               onClick={this.listLayout}
                               onKeyPress={this.listLayout}
                               role="button"
                               tabIndex={0}></i>
                        </li>
                    </ul>
                </div>

                <div className="collection-grid-view">
                    <ul>
                        <li>
                            <button onClick={() => this.LayoutView(6)} style={{"border": "none", "backgroundColor": "transparent", "padding": "0"}}>
                                <img src={`${process.env.BASE_URL}/assets/images/icon/2.png`} alt="" className="product-2-layout-view" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => this.LayoutView(4)} style={{"border": "none", "backgroundColor": "transparent", "padding": "0"}}>
                                <img src={`${process.env.BASE_URL}/assets/images/icon/3.png`} alt="" className="product-3-layout-view" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => this.LayoutView(3)} style={{"border": "none", "backgroundColor": "transparent", "padding": "0"}}>
                                <img src={`${process.env.BASE_URL}/assets/images/icon/4.png`} alt="" className="product-4-layout-view" />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => this.LayoutView(2)} style={{"border": "none", "backgroundColor": "transparent", "padding": "0"}}>
                                <img src={`${process.env.BASE_URL}/assets/images/icon/6.png`} alt="" className="product-6-layout-view" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="product-page-filter">
                    <select onChange={(e) => this.props.filterSort(e.target.value)}>
                        <option value="">Sorting items</option>
                        <option value="HighToLow">Price: High to Low</option>
                        <option value="LowToHigh">Price: Low to High</option>
                        {/* <option value="Newest">Newest Items</option> */}
                        <option value="AscOrder">Sort By Name: A To Z</option>
                        <option value="DescOrder">Sort By Name: Z To A</option>
                    </select>
                </div>

            </div>
        )
    }
}

export default FilterBar