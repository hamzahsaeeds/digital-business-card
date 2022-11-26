import React from "react";

function Footer() {
    return (
        <div className="footer">
            <a href="http://www.twitter.com/hamzahsaeeds" target="_blank">
                <img className="footer--twitter" src="../images/TwitterIcon.png"/>
            </a>
            <a href="http://www.facebook.com/hamzah.saeed.12" target="_blank">
                <img className="footer--facebook" src="../images/FacebookIcon.png"/>
            </a>
            <a href="http://www.instagram.com/hamzah_saeeds" target="_blank">
                <img className="footer--instagram" src="../images/InstagramIcon.png"/>
            </a>
            <a href="http://www.github.com/hamzahsaeeds" target="_blank">
                <img className="footer--github" src="../images/GitHubIcon.png"/>
            </a>
        </div>
    )
}

export default Footer;