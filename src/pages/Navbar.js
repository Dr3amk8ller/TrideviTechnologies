import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Sidebarr from './sidebar'; // Import Sidebar component
import './Navbar.css'; // Import Navbar styles

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar
    };

    return (
        <>
            <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
                <button className="toggle-button" onClick={handleSidebarToggle}>☰</button>
                <ul className="navbar-menu">
                    <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                    <li><ScrollLink to="about-us" smooth={true} duration={500}>About Page</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                    <li><ScrollLink to="clients" smooth={true} duration={500}>Clients</ScrollLink></li>
                    <li><ScrollLink to="why-choose-tridev" smooth={true} duration={500}>Why Choose Tridevi</ScrollLink></li>
                </ul>
            </nav>

            <Sidebarr isOpen={isSidebarOpen} handleClose={handleSidebarToggle} />
        </>
    );
};

export default Navbar;
