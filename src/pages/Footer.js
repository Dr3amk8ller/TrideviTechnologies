import React from 'react';
import './Footer.css'; // Ensure the correct path to the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo Section */}
                <div className="footer-logo">
                    <h2>Tridev Technologies</h2>
                </div>

                {/* Contact Information */}
                <div className="footer-contact">
                    <p>Address: nariman point mahalaxmi nagar, Vridavan Palace Colony, Indore Madhya Pradesh</p>
                    <p>Phone: +91-9340739809</p>
                    <p>Email: contact@tridevtechnologies.com</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                  
                    <a href="https://www.linkedin.com/company/tridev-technologies/" className="social-link">
                        LinkedIn
                    </a>
                 
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Tridev Technologies. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
