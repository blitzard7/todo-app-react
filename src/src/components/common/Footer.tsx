import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const activeStyle = {
        color: '#F15B2A',
    };

    return (
        <div className="navigation_container">
            <nav>
                <NavLink to="/" activeStyle={activeStyle} exact>
                    Home
                </NavLink>
                {' | '}
                <NavLink to="/todos" activeStyle={activeStyle}>
                    Todos
                </NavLink>
                {' | '}
                <NavLink to="/about" activeStyle={activeStyle}>
                    About
                </NavLink>
            </nav>
        </div>
    );
};

export default Footer;
