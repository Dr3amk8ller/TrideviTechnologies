import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Sidebarr from './sidebar';
import './Navbar.css';
import logo from './Assets/trishul-icon.png';

const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <button className="toggle-button" onClick={toggleMenu}>
                    ☰
                </button>
                <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                    <li><ScrollLink to="about-us" smooth={true} duration={500}>About Us</ScrollLink></li>
                    <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
                    <li><ScrollLink to="clients" smooth={true} duration={500}>Clients</ScrollLink></li>
                    <li><ScrollLink to="why-choose-us" smooth={true} duration={500}>Why Choose Us</ScrollLink></li>
                </ul>
            </nav>
            <Sidebarr isOpen={isMenuOpen} handleClose={toggleMenu} />
        </>
    );
};

export default Navbar;
