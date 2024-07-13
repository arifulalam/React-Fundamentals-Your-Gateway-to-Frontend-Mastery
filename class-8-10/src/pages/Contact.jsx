/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            Contact Us: <Link to="mailto:hello@syncmachine.com">hello@syncmachine.com</Link>
        </>
    )
}

export default Contact;