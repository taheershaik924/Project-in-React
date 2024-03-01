import React from "react";

import "./index.css";



function HeaderComponent() {
    return (
        <div className="container">
            <div className="nav">
                <h3>Vivah Bandhan</h3>
                    <ul className="link-in">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">How it Work</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                <select className="select-in">
                    <option>Singn in</option>
                    <option>Login</option>
                </select>
            </div>
            <div className="para-in">
                <h2 className="main-font">Get your perfect match</h2>
                <p>Trusted Matrimony & Matchmarking Service</p>
            </div>
        </div>
    )
}

export default HeaderComponent;