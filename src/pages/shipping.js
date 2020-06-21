import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"

const Shipping = () => (
    <Layout>
        <SEO title="Shipping" />
        <Breadcrumb title={'Shipping'}/>

        <section className="about-page  section-b-space">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-section">
                            <img src={`${process.env.BASE_URL}/assets/images/about/free-delivery-banner.jpg`} className="img-fluid" alt="free delivery in the UK"/>
                        </div>
                    </div>
                    <div className="col-sm-12" id="shipping-information">
                        <h3>Shipping Information</h3>
                        <ul>
                            <li>We offer free shipping to any address in the UK across all of our products!</li>
                            <li>We process orders between 9AM and 4.30PM Monday to Friday (UK time)</li>
                            <li>We are unable to dispatch orders at weekends or UK bank holidays</li>
                            <li>We don't deliver to PO Boxes or Prisons</li>
                            <li>Orders in the UK are sent by Royal Mail tracked delivery and require a signature on delivery</li>
                            <li>International orders are sent via FedEx</li>
                            <li>If you are not at home then the courier can acquire a signature from a neighbour or someone else 
                                at your address
                            </li>
                        </ul>

                        <h4>EU Shipping</h4>
                        <ul>
                            <li>For countries in the EU we charge an additional £8 for delivery</li>
                            <li>Countries outside of the EU may be charged additional import duty depending on local laws and regulations</li>
                            <li>It is your responsibility to understand these additional charges before ordering</li>
                        </ul>

                        <h4>US & Canada Shipping</h4>
                        <ul>
                            <li>For the US and Canada we charge an additional £12 for delivery</li>
                            <li>Orders from Canada may be charged additional import duty depending on local laws and regulations</li>
                            <li>Orders from the US will not incur import duty providing the value is less than $800</li>
                            <li>You are responsible for paying any import duties, FedEx will liase with you directly for payment</li>
                        </ul>

                        <h4>Australia & New Zealand Shipping</h4>
                        <ul>
                            <li>For Australia and New Zealand we charge an additional £12 for delivery</li>
                            <li>Orders from Australia may face Goods and Servce Tax upon entry into the country</li>
                            <li>Orders from New Zealand may face Goods and Service Tax, particularly if the value is over $60 NZ</li>
                            <li>You are responsible for paying any import duties, FedEx will liase with you directly for payment</li>
                        </ul>

                        <h4>Rest of the World Shipping</h4>
                        <ul>
                            <li>For Asia and the Middle East we charge an additional £15 for delivery</li>
                            <li>For the Americas and Caribbean we charge an additional £15 for delivery</li>
                            <li>For Africa we charge an additional £17 for delivery</li>
                            <li>If you are not sure how much we charge for your particular country please get in touch with us 
                                at <a href="mailto:support@james-shop.co.uk">support@james-shop.co.uk</a> and ask for a shipping quote
                            </li>
                            <li>Every country has a different threshold for importing goods, it is your responsibility to understand these 
                                before ordering
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
)

export default Shipping