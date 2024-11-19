import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import Routes from '../../constants/routes';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [activePage, setActivePage] = useState("");

    useEffect(() => {
        setActivePage(location.pathname);

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    const handleClick = (path) => {
        navigate(path);
        setActivePage(path);
    }
    return (
        <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <img onClick={() => handleClick('/')} className='navbar-logo' src={logo} alt='navbar-logo' />
            <div className='navbar-list'>
                {Routes.map((section, index) => (
                    <div onClick={() => handleClick(section.id)} className={`navbar-list-item ${activePage === section.id ? "active-item" : ""}`} key={index}>{section.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Navbar;

