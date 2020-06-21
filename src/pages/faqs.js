import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Breadcrumb from "../components/breadcrumb"
import './index.scss'

const Faqs = () => (
    <Layout>
        <SEO title="FAQS" />
        <Breadcrumb title={'FAQS'}/>

        <section className="faq-section section-b-space">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="accordion theme-accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link" type="button" data-toggle="collapse"
                                                data-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            Can I order over the telephone?
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Sadly no. We only accept online orders.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                            Can I amend an order?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>It may be possible if you contact us in time before your item is dispatched. Contact us 
                                            as soon as possible at <a href="mailto:support@james-shop.co.uk">support@james-shop.co.uk</a> to do this.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                            How long will my order take to arrive?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>We aim to get all orders to you within 5 business days.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                            How do I know that you have received my order?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Within a few minutes of placing your order you will receive and email confirmation from us 
                                            with all of the order details. If you do not receive this check your spam or junk folders. If 
                                            you still do not see an email then please contact us at <a href="mailto:support@james-shop.co.uk">support@james-shop.co.uk</a> ASAP.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFive">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                            How are orders packaged?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>All items come in a branded box or bag designed to keep the product safe from damage during transit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingSix">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseSix"
                                                aria-expanded="false" aria-controls="collapseSix">
                                            How do I return an item I'm not happy with?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>We understand that sometimes the item might just not be what you were hoping for. We will 
                                            happily accept items back for a refund in that event. Please read our <a href="/returns">returns policy</a> on 
                                            how to return an item to us.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingSeven">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                            How long does a refund take?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Please allow up to 10 working days for your refund to be processed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingEight">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseEight"
                                                aria-expanded="false" aria-controls="collapseEight">
                                            Do you deliver outside of the UK?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Indeed we do! See the <a href="/shipping">shipping information page</a> for exact details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingNine">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseNine"
                                                aria-expanded="false" aria-controls="collapseNine">
                                            How will I know my order has been dispatched?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseNine" className="collapse" aria-labelledby="headingNine"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>You will receive a dispatch notification when your order has left our warehouse. If you don't 
                                            think you've received this in time please check your spam or junk folders. If you still can't 
                                            see it then please contact us at <a href="mailto:support@james-shop.co.uk">support@james-shop.co.uk</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTen">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseTen"
                                                aria-expanded="false" aria-controls="collapseTen">
                                            Which courier do you use?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTen" className="collapse" aria-labelledby="headingTen"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>UK orders are sent using Royal Mail. International orders are sent via FedEx.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingEleven">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" type="button"
                                                data-toggle="collapse" data-target="#collapseEleven"
                                                aria-expanded="false" aria-controls="collapseEleven">
                                            What happens if I'm not at home when my parcel arrives?
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven"
                                        data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>All orders are sent using tracked shipping and must be signed for. If you are not at 
                                            home couriers can acquire a signature from a neighour. We cannot leave parcels in a safe 
                                            place for this reason.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
)

export default Faqs