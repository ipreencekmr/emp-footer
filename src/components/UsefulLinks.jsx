import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
    faAtom, 
    faBriefcase, 
    faFontAwesome 
} from "@fortawesome/free-solid-svg-icons";

import { faBootstrap } from "@fortawesome/free-brands-svg-icons";

export const UsefulLinks = () => {
    return (
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
                <a href="https://webpack.js.org/concepts/module-federation/" className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faBriefcase }></FontAwesomeIcon>
                  Module Federation
                </a>
            </p>
            <p>
                <a href="https://react.dev/" className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faAtom }></FontAwesomeIcon>
                  React
                </a>
            </p>
            <p>
                <a href="https://getbootstrap.com/" className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faBootstrap }></FontAwesomeIcon>
                  Bootstrap
                </a>
            </p>
            <p>
                <a href="https://fontawesome.com/" className="text-reset">
                    <FontAwesomeIcon className="me-3" icon={ faFontAwesome }></FontAwesomeIcon>
                  Font Awesome
                </a>
            </p>
        </div>
    );
}