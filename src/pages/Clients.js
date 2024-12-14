import React from 'react';
import './ClientsPage.css'; // Ensure the correct path to the CSS file

const Clients = () => {
    return (
        <section id="clients" className="clients-page">
            <div className="clients-content">
                <h2>Our Trusted Partners & Clients</h2>

                {/* Refined Stats Section */}
                <div className="stats-section">
                    <div className="stat-card">
                        <h3 className="animated-stat">200M+</h3>
                        <p>Facebook Audience</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="animated-stat">100M+</h3>
                        <p>Instagram Audience</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="animated-stat">200+</h3>
                        <p>Social Media Influencers</p>
                    </div>
                </div>

                {/* Client Logos Section */}
                <div className="client-logos">
                    <img src={require('./Assets/TikTok-Logo.png')} alt="TikTok" className="client-logo" />
                    <img src={require('./Assets/Uc-Browser-Logo.jpg')} alt="UC Browser" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="Zee5" className="client-logo" />
                    <img src={require('./Assets/bjp.jpg')} alt="bjp" className="client-logo" />
                </div>

                {/* Testimonials Section */}
                <div className="testimonials">
                    <h3>What Our Clients Say</h3>
                    <div className="testimonial-card">
                        <p>"Tridev Technologies played a key role in increasing the engagement for our podcast channel. Their strategies helped us reach a larger and more engaged audience, ensuring consistent growth!"</p>
                        <h4>Piyush Mangtani - The PM Talks</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"We collaborated with Tridev Technologies to manage our election campaign. Their team understood the political landscape and delivered a tailored digital strategy, resulting in a significant increase in voter engagement and support."</p>
                        <h4>Narrotam Mishra - BJP</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"Tridev Technologies helped us develop and market our software, as well as lead our team with innovative ideas. Their expertise in digital marketing and tech development made all the difference in achieving our goals."</p>
                        <h4>Hiteshi Bundela - Ubuddy</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
