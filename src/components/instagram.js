import React, { Component } from 'react'
import Slider from 'react-slick'
import ig from 'fetch-instagram'

class Instagram extends Component {
    constructor (props) {
        super (props)

        this.state = {
            InstaData: []
        }
    }

    componentDidMount() {
        const instagram = ig({
            accessToken: '8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc',
        });

        const users = instagram.media()
        users.then(res => this.setState({InstaData:res.data})).catch(e => console.log(e))
    }

    render() {
        const {InstaData} = this.state
        const {type} = this.props
        const sliderProps = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 7,
            responsive: [
                {
                    breakpoint: 1367,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        }

        return (
            <section className={`instagram`}>
                <div className={`container${(type === 'watch')?'':'-fluid'}`}>
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <h2 className="title-borderless"># instagram
                                </h2>
                                <Slider {...sliderProps} className="slide-7 no-arrow slick-instagram">
                                    {InstaData.map((pic,i) =>
                                        <div key={i}>
                                            <a href={pic.link} target="_blank" rel="noopener noreferrer">
                                                <div className="instagram-box">
                                                    <img src={`${pic.images.standard_resolution.url}`} alt="Avatar" className="w-100" />
                                                    <div className="overlay">
                                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )}
                                </Slider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Instagram