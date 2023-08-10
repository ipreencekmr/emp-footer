import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export const AboutMe = () => {
    return (
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon 
                    className="me-3" 
                    icon={ faGem }>
                </FontAwesomeIcon>Full Stack Engineer
            </h6>
            <p>
            As a technically-inclined professional with over a decade of experience, 
            I possess a unique combination of analytical acumen and the ability to deliver valuable 
            insights through the utilization of advanced data-driven methods and data analytics. 
            Working as Tech Lead having former experience with full stack including Database, Node, 
            AWS, CICD pipeline and Orchestration.
            </p>
        </div>
    )
};