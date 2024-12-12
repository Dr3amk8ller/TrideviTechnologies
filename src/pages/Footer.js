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
                    <p>Address: 456 Tech Street, Innovation Hub, India</p>
                    <p>Phone: +91-9876543210</p>
                    <p>Email: contact@tridevtech.com</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <a href="http://facebook.com/tridev-tech" className="social-link">
                        Facebook
                    </a>
                    <a href="http://linkedin.com/company/tridev-tech" className="social-link">
                        LinkedIn
                    </a>
                    <a href="http://instagram.com/tridev-tech" className="social-link">
                        Instagram
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
