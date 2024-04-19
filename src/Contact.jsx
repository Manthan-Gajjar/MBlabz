import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from './Footer';
import './Project1.css'; 


function Contact() {
    const [data, setData] = useState({
        Fullname: '',
        Phone: '',
        email: '',
        msg: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.Fullname}, my Phone No. is ${data.Phone}, My Email is ${data.email}, Here is What I Want to Say : ${data.msg}`);
        // Add logic to handle form submission (e.g., API call, validation, etc.)
    };

    return (
        <>
            <div  className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>

            <div  id ="Contact-main" className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <div className="mb-3">
                                <label htmlFor="contact-form-name" className="form-label">
                                    Full Name:
                                </label>
                                <input
                                    id="contact-form-name"
                                    className="form-control"
                                    type="text"
                                    name="Fullname"
                                    value={data.Fullname}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {/* Phone Number */}
                            <div className="mb-3">
                                <label htmlFor="contact-form-phone" className="form-label">
                                    Phone Number:
                                </label>
                                <input
                                    id="contact-form-phone"
                                    className="form-control"
                                    type="number"
                                    name="Phone"
                                    value={data.Phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {/* Email Address */}
                            <div className="mb-3">
                                <label htmlFor="contact-form-email" className="form-label">
                                    Email Address:
                                </label>
                                <input
                                    id="contact-form-email"
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            {/* Message */}
                            <div className="mb-3">
                                <label htmlFor="contact-form-message" className="form-label">
                                    Message:
                                </label>
                                <textarea
                                    id="contact-form-message"
                                    className="form-control"
                                    name="msg"
                                    value={data.msg}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            {/* Submit Button */}
                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
