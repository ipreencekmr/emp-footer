import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebookF, 
    faInstagram, 
    faLinkedinIn, 
    faTwitter 
} from "@fortawesome/free-brands-svg-icons";

export const SocialNetwork = () => {
    return (
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Social Network</h6>
            <p>
                <a 
                    href="https://www.facebook.com/profile.php?id=100083273206168" 
                    className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faFacebookF }></FontAwesomeIcon>
                  Facebook
                </a>
            </p>
            <p>
                <a 
                    href="https://www.linkedin.com/in/ipreencekmr/" 
                    className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faLinkedinIn }></FontAwesomeIcon>
                  Linked In
                </a>
            </p>
            <p>
                <a 
                    href="https://www.instagram.com/ipreencekmr/" 
                    className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faInstagram }></FontAwesomeIcon>
                  Instagram
                </a>
            </p>
            <p>
                <a 
                    href="https://twitter.com/ipreencekmr" 
                    className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faTwitter }></FontAwesomeIcon>
                  Twitter
                </a>
            </p>
        </div>
    );
}