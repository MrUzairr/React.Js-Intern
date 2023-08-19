import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChampagneGlasses,
    faPersonBiking,
    faUtensils,
    faSpa,
} from "@fortawesome/free-solid-svg-icons";
import "./index.css";
export default function Services() {
    return (
        <div  id='service'>
            <div className="row about-container" style={{ margin: "150px" }}>
                <h1>Our Services</h1>
                <p>Exercitation is not responsible for any data, they are in fault who abandon official duties</p>
                <div className="col-md-6 mt-4">
                    <div className="service-icons service-div1">
                        <div>
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faChampagneGlasses} className="service-logo" />
                                <p>Delicious Food</p>
                            </div>
                        </div>
                        <div>
                            <div className="service-icon">
                                <FontAwesomeIcon
                                    icon={faPersonBiking}
                                    className="service-logo"
                                />
                                <p>Fitness</p>
                            </div>
                        </div>
                        <div>
                            <div  className="service-icon" >
                                <FontAwesomeIcon icon={faUtensils} className="service-logo"/>
                                <p>Dine-In</p>
                            </div>
                        </div>
                        <div>
                            <div className="service-icon">
                                <FontAwesomeIcon icon={faSpa} className="service-logo"/>
                                <p>Beauty Spa</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 about-div2">
                    <img
                        className="service-img"
                        src="service.jpg"
                        height={"400px"}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
