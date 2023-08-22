import "../components/Footerstyle.css";

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>At.Saywani Post.Channi Tq.Patur Dist.Akola</p>
                            <p>india</p>

                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            7218565469
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}  />
                            sumittale2001@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                   <h4>Feel free to get in touch. Cheers!</h4>
                   <p></p>
                   <div className="social">
                    <NavLink to="https://www.facebook.com/profile.php?id=100085180009556">
                   <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </NavLink>
                    <NavLink to="https://twitter.com/Trippy_trapsss">
                   <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/sumit-tale-512754268/">
                   <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                    </NavLink>
                   <NavLink to="https://www.instagram.com/trippy_trapsss/">
                   <FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} />
                   </NavLink>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Footer