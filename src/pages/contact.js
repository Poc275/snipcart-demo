import React, {Component} from 'react'
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import Layout from "../components/layout"

class Contact extends Component {
    constructor (props) {
        super (props)
    }

    render (){
        return (
            <Layout>
                <SEO title="Contact James" />
                <Breadcrumb title={'Contact Us'}/>
                
                <section className=" contact-page section-b-space">
                    <div className="container">
                        <div className="row section-b-space">
                            <div className="col-lg-7 map">
                                <iframe width="600" height="450" frameBorder="0" style={{ "border":0 }} 
                                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuUs1cePseUgRdn3h9MCLRS4&key=AIzaSyBK-MLMYxipGuLE2PQSDeeZIhlhnqxA_v8" 
                                    allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-right">
                                    <ul>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={`${process.env.BASE_URL}/assets/images/icon/phone.png`} alt="telephone icon" />
                                                <h6>Contact Us</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>+44 1332 123456</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <h6>Address</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>Shanakiel</p>
                                                <p>Ilkeston Road</p>
                                                <p>Heanor</p>
                                                <p>Derbyshire</p>
                                                <p>DE75 7DR</p>
                                                <p>United Kingdom</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={`${process.env.BASE_URL}/assets/images/icon/email.png`} alt="email icon" />
                                                <h6>Email</h6>
                                            </div>
                                            <div className="media-body">
                                                <p><a href="mailto:support@james-shop.co.uk">support@james-shop.co.uk</a></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" className="form-control" id="name"
                                                   placeholder="Enter Your name" required="" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Last Name</label>
                                            <input type="text" className="form-control" id="last-name"
                                                   placeholder="Email" required="" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="review">Phone number</label>
                                            <input type="text" className="form-control" id="review"
                                                   placeholder="Enter your number" required="" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required="" />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="subject">Subject</label>
                                            <select className="form-control" id="subject">
                                                <option value="returns">Returns</option>
                                                <option value="order">Order Status</option>
                                                <option value="product">Product Enquiry</option>
                                                <option value="enquiry">General Enquiry</option>
                                            </select>
                                            <br />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Write Your Message</label>
                                            <textarea className="form-control" placeholder="Write Your Message"
                                                      id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Send Your Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Contact