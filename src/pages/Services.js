import React from "react";
import "./ServicesPage.css";

const Services = () => {
    const services = [
        {
            title: "Strategic Marketing",
            description: "We craft innovative marketing strategies to position your brand ahead of the competition. Our approach ensures that your brand resonates with the right audience at the right time, creating impactful and lasting connections."
        },
        {
            title: "Social Media Management",
            description: "We manage your social media presence to ensure your brand stays relevant and engaged with its audience. From content creation to strategy development, we make sure your brand is trending across all major platforms, driving engagement and growth."
        },
        {
            title: "Search Engine Optimization (SEO)",
            description: "SEO is not just about ranking higher on search engines – it’s about boosting your online swagger! Our team optimizes your website’s content, structure, and technical aspects to improve its visibility and authority, so Google has no choice but to make you a top priority."
        },
        {
            title: "Creative Design",
            description: "Our creative design services bring your ideas to life through visual storytelling. Whether it's designing a logo that represents your brand's essence or crafting an ad campaign that captivates your audience, we focus on creating designs that leave a lasting impression."
        },
        {
            title: "Technical Solutions",
            description: "We provide innovative technical solutions that streamline your operations and ensure your business runs smoothly. From system integrations to troubleshooting and support, we ensure your tech is always working for you, not against you."
        },
        {
            title: "Automation Services",
            description: "Take your operations to the next level with cutting-edge automation. We help you streamline repetitive tasks and business processes, increasing efficiency, reducing errors, and allowing you to focus on what really matters—growing your business."
        },
        {
            title: "Brand Pitching",
            description: "Our brand pitching services help you craft compelling, persuasive stories that resonate with investors, partners, and customers. We make sure your message is clear, impactful, and convincing, ensuring your brand stands out and converts."
        },
        {
            title: "Sales/Leads",
            description: "We develop proven strategies to drive growth and generate leads. By leveraging advanced sales techniques and data-driven insights, we help you convert prospects into loyal customers, accelerating your business's success."
        },
        {
            title: "Video Editing",
            description: "We specialize in turning raw footage into captivating stories through expert video editing. Whether it's for social media, advertising, or corporate use, our team ensures your videos communicate your message with impact and style."
        },
        {
            title: "Website Development",
            description: "We design and develop modern, responsive websites tailored to your brand’s unique identity. Whether you're looking for an e-commerce platform, a portfolio site, or a business hub, we create websites that are not only visually stunning but also functional and user-friendly."
        },
        {
            title: "Application Development",
            description: "We build mobile apps that captivate and perform. From concept to execution, our team ensures your app meets the needs of your target audience, providing seamless experiences and innovative features that drive engagement and retention."
        },
        {
            title: "Software Development",
            description: "Custom software solutions for your unique business needs. Whether you require a CRM, an enterprise system, or a custom tool to solve a specific problem, we develop software that empowers your business to operate more efficiently and effectively."
        },
        {
            title: "Hosting Solutions",
            description: "Reliable and secure hosting solutions to ensure your digital presence stays online. We provide scalable hosting plans that meet your website’s traffic demands, with 24/7 support to ensure your business is always accessible."
        },
        {
            title: "Video Campaign Delivery",
            description: "From concept to execution, we manage end-to-end video campaigns that leave an impact. Our video campaign delivery service covers everything from creative direction to production and post-production, ensuring your brand story is told in the most compelling way possible."
        },
    ];

    // Function to handle hover events
    const handleHover = (isHovering) => {
        const carouselTrack = document.querySelector(".carousel-track");
        carouselTrack.style.animationPlayState = isHovering ? "paused" : "running";
    };

    return (
        <section id="services" className="services-page">
            <h2>Our Services</h2>
            <div
                className="carousel-container"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                <div className="carousel-track">
                    {services.map((service, index) => (
                        <div className="carousel-item" key={index}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
