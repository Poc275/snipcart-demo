import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.scss'
import ReactMarkdown from 'react-markdown'

class ProductDetailTabs extends Component {
    render() {
        const product = this.props.product

        return (
            <section className="tab-product m-0">
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <Tabs className="tab-content nav-material">
                            <TabList className="nav nav-tabs nav-material">
                                <Tab className="nav-item">
                                    <span className="nav-link">
                                        <i className="icofont icofont-ui-home"></i>Details</span>
                                    <div className="material-border"></div>
                                </Tab>
                                <Tab className="nav-item">
                                    <span className="nav-link" ><i className="icofont icofont-man-in-glasses"></i>Description</span>
                                    <div className="material-border"></div>
                                </Tab>
                                {/* <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Video</span>
                                    <div className="material-border"></div>
                                </Tab> */}
                                <Tab className="nav-item">
                                    <span className="nav-link" >
                                        <i className="icofont icofont-contacts"></i>Write Review</span>
                                    <div className="material-border"></div>
                                </Tab>
                            </TabList>

                            <TabPanel className="tab-pane fade mt-4 show active">
                            <table className="table table-striped mb-0">
                                    <tbody>
                                        <tr>
                                            <th>Summary</th>
                                            <td>{product.summary}</td>
                                        </tr>
                                        <tr>
                                            <th>Categories</th>
                                            <td>{product.product_category?.category ? product.product_category.category : ''}</td>
                                        </tr>
                                        <tr>
                                            <th>Tags</th>
                                            <td>{product.product_tags.map(tag => tag.tag).join(' | ')}</td>
                                        </tr>
                                        <tr>
                                            <th>Weight</th>
                                            <td>{product.weight}g | {product.packed_weight}g (packed)</td>
                                        </tr>
                                        <tr>
                                            <th>Dimensions</th>
                                            <td>{product.dimensions}</td>
                                        </tr>
                                        <tr>
                                            <th>Primary Material</th>
                                            <td>{product.primary_material}</td>
                                        </tr>
                                        <tr>
                                            <th>Secondary Material</th>
                                            <td>{product.secondary_material === "null" ? "N/A" : product.secondary_material}</td>
                                        </tr>
                                        <tr>
                                            <th>Tertiary Material</th>
                                            <td>{product.tertiary_material === "null" ? "N/A" : product.tertiary_material}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabPanel>

                            <TabPanel>
                                <ReactMarkdown className="mt-4 p-0" source={product.description} />
                            </TabPanel>

                            <TabPanel>
                                <form className="theme-form mt-4">
                                    <div className="form-row">
                                        {/* <div className="col-md-12 ">
                                            <div className="media m-0">
                                                <label>Rating</label>
                                                <div className="media-body ml-3">
                                                    <div className="rating three-star">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" className="form-control" id="review" placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <textarea className="form-control" placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit">Submit YOur Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProductDetailTabs