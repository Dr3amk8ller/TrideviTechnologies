import React from 'react';
import './WhyChoosePage.css'; // Ensure the correct path to the CSS file

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
                        <img src="https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2014/03/build-teamwork-culture-41.jpg" alt="Our Team" />
                        <div className="overlay">Empowered Team</div>
                    </div>
                    <div className="visual-item">
                        <img src="https://th.bing.com/th/id/OIP.tn3ZFtFprWhSeHcRSvqbiAHaEK?rs=1&pid=ImgDetMain" alt="Client Work" />
                        <div className="overlay">Innovative Projects</div>
                    </div>
                    <div className="visual-item">
                        <img src="https://www.cloudkettle.com/wp-content/uploads/2015/04/Build_MA_Workflow-768x432.png" alt="Our Workflow" />
                        <div className="overlay">Seamless Workflow</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoosePage;
