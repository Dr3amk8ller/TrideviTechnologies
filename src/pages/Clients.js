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
                        <h3>200M+</h3>
                        <p>Facebook Audience</p>
                    </div>
                    <div className="stat-card">
                        <h3>100M+</h3>
                        <p>Instagram Audience</p>
                    </div>
                    <div className="stat-card">
                        <h3>200+</h3>
                        <p>Social Media Influencers</p>
                    </div>
                </div>

                {/* Client Logos Section */}
                <div className="client-logos">
                    <img src={require('./Assets/TikTok-Logo.png')} alt="TikTok" className="client-logo" />
                    <img src={require('./Assets/Uc-Browser-Logo.jpg')} alt="UC Browser" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="Zee5" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="Ubuddy" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="SS Events" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="BJP" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="The PM Talks" className="client-logo" />
                    <img src={require('./Assets/ZEE5.png')} alt="Other Clients" className="client-logo" />
                </div>

                {/* Testimonials Section */}
                <div className="testimonials">
                    <h3>What Our Clients Say</h3>
                    <div className="testimonial-card">
                        <p>"Vani Media transformed our online presence and boosted our engagement by 200%. Their strategies are spot-on!"</p>
                        <h4>Client Name - Company</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"The creativity and dedication of Vani Media’s team are unmatched. We saw measurable results within the first few months!"</p>
                        <h4>Client Name - Company</h4>
                    </div>
                    <div className="testimonial-card">
                        <p>"Thanks to their comprehensive digital strategy, our brand's visibility skyrocketed. Truly a pleasure working with them!"</p>
                        <h4>Client Name - Company</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
