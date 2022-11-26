import React from "react";

export default function Info() {
    return (
        <div className="info">
            <img src="../images/profile-pic-traditional.jpeg" alt="profile-pic" className="info--img"/>
            <h3 className="info--name">Hamzah Saeed</h3>
            <h5 className="info--designation">Frontend Developer</h5>
            <a href="mailto:hamzahsaeed23@hotmail.com" target="_blank">
                <button className="email-btn">
                    <img src="../images/MailIcon.png"/> Email
                </button>
            </a>
            <a href="https://www.linkedin.com/in/hamzahsaeed" target="_blank">
                <button className="linkedin-btn"><i className="fa fa-linkedin-square" /> LinkedIn</button>
            </a>
            
        </div>
    )
}