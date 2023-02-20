import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from './avatar.png';
import net from './netflix-logo.png'
function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                // src="https://upload.wikimedia.org/wikipidia/commons/"
                src={net}
                alt="netflix-logo"
            />
            <img
                className="nav__avatar"
                src={logo}
                alt="netflix-logo"
            />
        </div>
    )
}

export default Nav
