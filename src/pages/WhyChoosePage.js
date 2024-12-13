import React from 'react';
import './WhyChoosePage.css'; // Ensure the correct path to the CSS file

// Import images
import output1 from './Assets/output1.jpg';
import output2 from './Assets/output2.jpg';
import output3 from './Assets/output3.jpg';

const WhyChoosePage = () => {
    return (
        <section id="why-choose-tridev" className="why-choose-page">
            <div className="content-wrapper">
                <h2>Why Choose Tridev Technologies?</h2>
                
                {/* Introduction Section */}
                <div className="intro-section">
                    <p>
                        At Tridev Technologies, we bring the wisdom of three to empower your business. 
                        Our expertise spans cutting-edge software solutions, future-ready technology stacks, 
                        and tailored services designed to make your vision a reality.
                    </p>
                </div>

                {/* Unique Selling Points Section */}
                <div className="usp-section">
                    <div className="usp-item trishul-hover">
                        <h3>Future-Proof Solutions</h3>
                        <p>
                            Leveraging the latest technologies to build scalable, robust, and adaptive systems.
                        </p>
                    </div>
                    <div className="usp-item trishul-hover">
                        <h3>End-to-End Support</h3>
                        <p>
                            From ideation to deployment, we provide comprehensive project management.
                        </p>
                    </div>
                    <div className="usp-item trishul-hover">
                        <h3>Client-Centric Approach</h3>
                        <p>
                            Your needs are our priority, with personalized solutions to meet unique challenges.
                        </p>
                    </div>
                </div>

                {/* Visual Section */}
                <div className="visual-section">
                    <div className="visual-item">
                        <img src={output1} alt="Empowered Team" />
                        <div className="overlay">Empowered Team</div>
                    </div>
                    <div className="visual-item">
                        <img src={output2} alt="Innovative Projects" />
                        <div className="overlay">Innovative Projects</div>
                    </div>
                    <div className="visual-item">
                        <img src={output3} alt="Seamless Workflow" />
                        <div className="overlay">Seamless Workflow</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoosePage;
