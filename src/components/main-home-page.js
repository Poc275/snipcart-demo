import React from "react"
import { Link } from "gatsby"
import Slider from 'react-slick'
import { useStaticQuery, graphql } from "gatsby"
import TopCollection from "./top-collection";

const MainHomePage = () => (
    <div>
        {/*Home Slider*/}
        <section className="p-0">
            <Slider className="slide-1 home-slider">
                <div>
                    <div className="home home1 text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="slider-contain">
                                        <div>
                                            <h4>welcome to James</h4>
                                            <h1>men's fashion</h1>
                                            <Link to={`${process.env.BASE_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="home home2 text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="slider-contain">
                                        <div>
                                            <h4>welcome to James</h4>
                                            <h1>men's accessories</h1>
                                            <Link to={`${process.env.BASE_URL}/left-sidebar/collection`} className="btn btn-solid">shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
        {/*Home Section End*/}

        {/*collection banner*/}
        <section className="pb-0">
            <div className="container">
                <div className="row partition2">
                    <div className="col-md-6">
                        <Link to={`${process.env.BASE_URL}/left-sidebar/collection`}>
                            <div className="collection-banner p-right text-center">
                                <img src={`${process.env.BASE_URL}/assets/images/sub-banner.jpg`} className="img-fluid" alt=""/>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>shop</h4>
                                            <h2>clothing</h2>
                                        </div>
                                    </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to={`${process.env.BASE_URL}/left-sidebar/collection`}>
                            <div className="collection-banner p-right text-center">
                                <img src={`${process.env.BASE_URL}/assets/images/sub-banner.jpg`} className="img-fluid" alt=""/>
                                    <div className="contain-banner">
                                        <div>
                                            <h4>shop</h4>
                                            <h2>accessories</h2>
                                        </div>
                                    </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*collection banner end*/}

        <TopCollection />
    </div>
)

export default MainHomePage