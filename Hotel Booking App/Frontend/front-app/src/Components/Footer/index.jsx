import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './index.css'
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink


export default function Footer() {
    return (
        <div style={{ backgroundColor: '#18181d' }}>
            <div className="row about-container">
                <div className="col-md-5 justify-content-center">
                    <div className="footer1">
                        <div className="footer-logo" style={{ display: 'flex', flexDirection: 'row' }}>
                            <FontAwesomeIcon icon={faCrown} style={{ color: 'rgb(247,187,7)' }} />
                            <p>
                                <i>Crow<span style={{ color: 'rgb(247,187,7)' }}>ny</span></i>
                            </p>
                        </div>
                        <p style={{ textAlign: 'justify' }}>
                            The Crown Hotel System redefines hospitality. Seamlessly managing
                            reservations, guest preferences, and services, it offers an
                            unparalleled experience. Our cutting-edge technology ensures
                            smooth check-ins, personalized stays, and efficient check-outs.
                        </p>
                        <div className="social-icons">
                            <div>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="footer1">
                        <div className="footer-logo">
                            <p>Links</p>
                        </div>
                        <div className="web-tabs">
                            <ScrollLink className="web-tabs-txt" to="home" smooth={true} duration={500}>Lodge</ScrollLink>
                            <a className="web-tabs-txt" to="/room">Rooms</a>
                            <ScrollLink className="web-tabs-txt" to="service" smooth={true} duration={500}>Services</ScrollLink>
                            <ScrollLink className="web-tabs-txt" to="about" smooth={true} duration={500}>About Us</ScrollLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="footer1">
                    <div className="footer-logo">
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <p style={{ textAlign: 'justify' }}>
                            For inquiries or assistance, feel free to reach out to our
                            dedicated team.
                        </p>
                        <div className="contact-data">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p className="contact-data-txt">1201 park street,Lahore ,Punjab Pakistan</p>
                        </div>
                        <div className="contact-data">
                            <FontAwesomeIcon icon={faPhone} />
                            <p className="contact-data-txt">[55] 447 472 800</p>
                        </div>
                        <div className="contact-data">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className="contact-data-txt">info@dentor.com</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="text-center" style={{backgroundColor:'rgb(247,187,7)',height:'50px'}}>
                <p style={{color:'#000',fontSize:'16px',fontWeight:'500',paddingTop:'15px'}}>© 2023 Crowny Hotel. All rights reserved.</p>
            </div>
        </div>
    );
}

