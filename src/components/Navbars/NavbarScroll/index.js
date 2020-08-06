import React from 'react';
import './style.css';

import Logo from './logo.jpg';  

const NavbarScroll = (props) => {
    return (
        <nav className={props.classNavbar}>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <ul>
                <li><a href="#start">Início</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Time</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    )
}

export default NavbarScroll;
