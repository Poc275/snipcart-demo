import React from "react"
import { Link } from "gatsby"
import Slider from 'react-slick'
import TopCollection from "./top-collection"
import Instagram from "./instagram"
import NewsTicker from "./news-ticker"
// import {
//     svgFreeShipping,
//     svgservice,
//     svgoffer
// } from "../services/svgs"

const MainHomePage = () => (
    <div>
        <NewsTicker />

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
                                            <Link to={`/collection`} className="btn btn-solid">shop now</Link>
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
                                            <Link to={`/collection`} className="btn btn-solid">shop now</Link>
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
                        <Link to={`/clothing`}>
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
                        <Link to={`/accessories`}>
                            <div className="collection-banner p-right text-center">
                                <img src={`${process.env.BASE_URL}/assets/images/sub-banner3.jpg`} className="img-fluid" alt=""/>
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

        {/*Parallax banner*/}
        <section className="p-0">
            <div className="full-banner parallax-banner1 parallax text-center p-left">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner-contain">
                                <h2>2020</h2>
                                <h3>summer collection</h3>
                                <h4>now in store</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Parallax banner End*/}

        {/* <SpecialProducts /> */}

        {/* Service Layout */}
        <div className="container">
            <section className="service border-section small-section ">
                <div className="row">
                    <div className="col-md-4 service-block">
                        <div className="media">
                            {/* <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} /> */}
                            <img src={`${process.env.BASE_URL}/assets/images/icon/globe-free-img-white.png`} alt="free shipping logo" className="img-fluid" style={{ width: "75px" }} />
                            <div className="media-body ml-2">
                                <h4>free shipping</h4>
                                <p>free shipping world wide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 service-block">
                        <div className="media">
                            {/* <div dangerouslySetInnerHTML={{ __html: svgservice }} /> */}
                            <img src={`${process.env.BASE_URL}/assets/images/icon/quality-free-img-white.png`} alt="quality control logo" className="img-fluid" style={{ width: "75px" }} />
                            <div className="media-body ml-2">
                                <h4>Best Quality</h4>
                                <p>All of our products have been tested by our staff</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 service-block">
                        <div className="media">
                            {/* <div dangerouslySetInnerHTML={{ __html: svgoffer }} /> */}
                            <img src={`${process.env.BASE_URL}/assets/images/icon/lock-free-img-white.png`} alt="secure payments logo" className="img-fluid" style={{ width: "75px" }} />
                            <div className="media-body ml-2">
                                <h4>Secure Payments</h4>
                                <p>Secure payment gateway provided by Snipcart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/* Service Layout end */}

        {/* Blog Section */}
        {/* <div className="container">
            <div className="row">
                <div className="col">
                    <div className="title1 section-t-space">
                        <h4>Recent Story</h4>
                        <h2 className="title-inner1">from the blog</h2>
                    </div>
                </div>
            </div>
        </div>
        <section className="blog p-t-0">
            <BlogSection />
        </section> */}
        {/*Blog Section End*/}

        <Instagram />

        {/* <LogoBlock /> */}

    </div>
)

export default MainHomePage