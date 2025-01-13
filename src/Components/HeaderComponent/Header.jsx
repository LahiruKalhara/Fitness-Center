import React, { useState } from 'react';
import './Header.css'
import Logo from '../../images/Logo@1x.png'
import Menu from '../../images/more.png'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className='header'>
                <div className='left'>
                    <img src={Logo} alt="" />
                    <ul>
                        <li>Timetables</li>
                        <li>Centers</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <a href="">Create account</a>
                    <a2 href="">Log in</a2>
                </div>
                <div className='menu-icon' onClick={toggleMenu}>
                    <img src={Menu} alt="" />
                </div>
            </div>
            
        </>
    )
}

export default Header