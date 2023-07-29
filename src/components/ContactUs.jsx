import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
    faHome, 
    faPhone, 
    faEnvelope, 
    faPrint} from "@fortawesome/free-solid-svg-icons";
  
export const ContactUs = () => {
    return (
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
                <FontAwesomeIcon className="me-3" icon={ faHome }></FontAwesomeIcon>
                    Gurugram, HR 122002, IN
            </p>
            <p>
                <FontAwesomeIcon className="me-3" icon={ faEnvelope }></FontAwesomeIcon>
                    ipreencekmr@gmail.com
            </p>
            <p>
                <FontAwesomeIcon className="me-3" icon={ faPhone }></FontAwesomeIcon> 
                    +91 8744825823
            </p>
            <p>
                <FontAwesomeIcon className="me-3" icon={ faPrint }></FontAwesomeIcon> 
                    +91 7988784138
            </p>
        </div>
    );
};