import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUsPage from "./AboutUsPage";
import Services from "./Services";
import Clients from "./Clients";
import WhyChoosePage from "./WhyChoosePage";
import "./HomePage.css";
import BackgroundImage from "./Assets/tech3.png"; // Import the image here

const HomePage = () => {
  const navigate = useNavigate();
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);

  const handleWhyChooseUsClick = () => {
    setShowWhyChooseUs(!showWhyChooseUs);
  };

  return (
    <div>
      <Navbar />
      <section id="home">
        {/* Inline style applied to set background dynamically */}
        <div
          className="home-container"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="header-content">
            <div className="intro-text">
              <h1>Welcome to Tridev Technology</h1>
              <p>
                Your trusted partner in digital transformation, innovative
                software solutions, and cutting-edge technology.
              </p>
              <a
                href="#why-choose-us"
                className="homebtn-about"
                onClick={handleWhyChooseUsClick}
              >
                Why Choose Us?
              </a>
            </div>
          </div>
        </div>

        {showWhyChooseUs && (
          <section id="why-choose-us" className="why-choose-us">
            <div className="why-choose-us-content">
              <blockquote className="highlighted-text">
                Seeking reliable and scalable software solutions? <br />
                Let us help you bring your ideas to life!
              </blockquote>
              <p className="chooseus">
                At Tridev Technology, we believe in creating innovative, secure,
                and scalable solutions that can help you stay ahead of the
                competition. We offer tailored services for businesses of all
                sizes, and our commitment to excellence drives everything we do.
              </p>
              <div className="cards-container">
                <div className="card">
                  <div className="card-content">
                    <h3>Custom Solutions</h3>
                    <p>
                      We design custom software solutions that align with your
                      business goals, ensuring optimal performance and user
                      experience.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <h3>End-to-End Support</h3>
                    <p>
                      From development to deployment and ongoing support, we
                      ensure that your systems operate smoothly with
                      comprehensive solutions.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <h3>Future-Proof Technology</h3>
                    <p>
                      We use the latest technologies to build future-proof
                      systems, ensuring long-term success and scalability.
                    </p>
                  </div>
                </div>
              </div>
              <p className="chooseus">
                Ready to take the next step? Get in touch with us to discuss how
                we can help you leverage technology for business growth.
              </p>
              <a href="/contact" className="homebtn-about">
                Contact Us
              </a>
            </div>
          </section>
        )}

        <AboutUsPage />
        <Services />
        <Clients />
        <WhyChoosePage />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
