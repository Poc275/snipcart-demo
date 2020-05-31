import React from "react"
import { Link } from "gatsby"
import Slider from 'react-slick';
import { useStaticQuery, graphql } from "gatsby"

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
    </div>
)

export default MainHomePage