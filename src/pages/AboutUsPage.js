import React from 'react';
import './AboutUsPage.css'; // Ensure this path is correct

const AboutUsPage = () => {
    return (
        <section id="about-us" className="about-us-page">
            <div className="about-us-content">
                <h2>About Tridev Technology</h2>
                <div className="floating-sections">
                    {/* What We Do Section */}
                    <div className="section enhanced-what-we-do">
                        <h3>What We Do</h3>
                        <p>
                            Empowering Brands through Digital Innovation. Tridev Technology is a digital marketing agency that helps businesses grow and succeed by providing innovative solutions in various aspects of online marketing. We specialize in:
                        </p>
                        <div className="what-we-do-icons">
                            <div className="icon-box">
                                <div className="icon">💻</div>
                                <span>Application/Website Development</span>
                            </div>
                            <div className="icon-box">
                                <div className="icon">📱</div>
                                <span>Social Media Management</span>
                            </div>
                            <div className="icon-box">
                                <div className="icon">🎥</div>
                                <span>Video Editing</span>
                            </div>
                            <div className="icon-box">
                                <div className="icon">📣</div>
                                <span>Brand Pitching</span>
                            </div>
                            <div className="icon-box">
                                <div className="icon">📊</div>
                                <span>Sales/Lead Generation</span>
                            </div>
                        </div>
                        <p>
                            Our goal is to create customized, scalable, and effective digital strategies that help our clients build a strong online presence, engage their audience, and achieve their business objectives.
                        </p>
                    
                    </div>

                    {/* Who We Are Section */}
                    <div className="section">
                        <h3>Who We Are</h3>
                        <p>
                            Inspired by the Divine Trinity. At Tridev Technology, we are a team of creative and innovative digital marketers, developers, and designers. Our work is inspired by the three divine forces – Brahma, Vishnu, and Mahesh – representing Creation, Preservation, and Destruction, respectively. We believe that:
                        </p>
                        <ul>
                            <li><strong>Brahma:</strong> We create innovative and effective digital strategies that bring new opportunities and solutions to life.</li>
                            <li><strong>Vishnu:</strong> We preserve our clients' digital presence with continuous growth and improvement in online engagement.</li>
                            <li><strong>Mahesh:</strong> We eliminate inefficiencies and continuously refine our strategies to ensure sustained success.</li>
                        </ul>
                        <p>
                            Our global team is committed to bringing these divine principles to every project, ensuring we craft holistic, sustainable solutions for our clients.
                        </p>
                       
                    </div>

                    {/* How We Work Section */}
                    <div className="section">
                        <h3>How We Work</h3>
                        <p>
                            Collaboration for Success. At Tridev Technology, we take a collaborative approach to digital marketing and development. Our process involves understanding your unique business needs and crafting tailored solutions that align with your goals. We focus on:
                        </p>
                        <ul>
                            <li>Engaging Social Media Content and Campaigns</li>
                            <li>Cutting-edge Video Editing and Production</li>
                            <li>Responsive and Functional Websites/Applications</li>
                            <li>Strategic Brand Positioning and Pitching</li>
                            <li>Effective Sales and Lead Generation</li>
                        </ul>
                        <p>
                            We continually innovate and adapt to emerging trends, ensuring that your business is always ahead in the competitive digital space.
                        </p>
                      
                    </div>

                    {/* Our Office Section */}
                    <div className="section">
                        <h3>Our Office</h3>
                        <p>
                            A Space for Innovation and Creativity. Located in the NCT of India, our office is designed to foster collaboration, creativity, and innovation. We embrace a hybrid working culture, providing our team with the flexibility to work both from our vibrant office and remotely. Our office environment is centered around sustainability and growth, supporting both our team and clients' aspirations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsPage;
