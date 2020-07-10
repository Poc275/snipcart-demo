import React, { useState } from 'react'
import { useFormik } from 'formik'

const ContactForm = () => {
    const [contacted, setContacted] = useState(false)
    const [contactError, setContactError] = useState(null)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: 'returns',
            invoice: '',
            message: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2))
            submitForm(values)
        },
    })

    const submitForm = (values) => {
        fetch(process.env.SEND_CONTACT_MESSAGE_URL, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then((res) => {
            console.log(res)
            setContacted(true)
        },
        (error) => {
            console.log("Error sending message:", error)
            setContacted(true)
            setContactError(error)
        })
    }

    if(contacted) {
        // check if there was an error sending the message
        if(contactError) {
            return(
                <div style={{textAlign: 'center'}}>
                    <h3>There was an error sending your message, please retry. If the problem persists contact us via social media:</h3>
                    <ul>
                        <li style={{fontSize: '16px', display: 'block'}}>
                            <a href='https://www.facebook.com/'><i className="fa fa-facebook" aria-hidden="true"></i> Facebook</a><span>&nbsp;</span>
                        </li>
                        <li style={{fontSize: '16px', display: 'block'}}>
                            <a href='https://instagram.com'><i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a><span>&nbsp;</span>
                        </li>
                        <li style={{fontSize: '16px', display: 'block'}}>
                            <a href='https://www.pinterest.co.uk/'><i className="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a>
                        </li>
                    </ul>
                </div>
            )
        } else {
            return(
                <h3 style={{textAlign: 'center'}}>Thankyou for getting in touch! We'll get back to you ASAP.</h3>
            )
        }
    } else {
        return (
            <form className="theme-form" onSubmit={formik.handleSubmit}>
                <div className="form-row">
                    <div className="col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Enter your last name"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            className="form-control"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="phone">Telephone Number</label>
                        <input 
                            className="form-control"
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="Enter your telephone number"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="subject">Subject</label>
                        <select className="form-control" id="subject" name="subject" onChange={formik.handleChange} value={formik.values.subject}>
                            <option value="returns">Returns</option>
                            <option value="enquiry">General Enquiry</option>
                            <option value="complaint">Complaint</option>
                        </select>
                        <br />
                    </div>

                    {formik.values.subject === 'returns' ? 
                        <div className="col-md-12">
                            <label htmlFor="invoice">Invoice Number</label>
                            <input 
                                className="form-control"
                                id="invoice"
                                name="invoice"
                                type="text"
                                placeholder="For returns we need your invoice number"
                                onChange={formik.handleChange}
                                value={formik.values.invoice}
                                required
                            />
                        </div> 
                        : null
                    }

                    <div className="col-md-12">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            className="form-control"
                            id="message"
                            name="message"
                            type="message"
                            rows="6"
                            placeholder="Write your message..."
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            required
                        />
                    </div>

                    <button className="btn btn-solid" type="submit" disabled={formik.isSubmitting}>Send</button>
                </div>
            </form>
        )
    }
}

export default ContactForm