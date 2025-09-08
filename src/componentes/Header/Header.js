import './Header.css'
import React, { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header__nav_list">
                    <li className="header__nav_list_item">
                        <a className="header__nav_list_link" href="#Hero">Natalia Kieling...</a>
                    </li>
                    <li className="header__nav_list_item2">
                        <a className="header__nav_list_link2" href="#Servicos">Serviços</a>
                    </li>
                    <li className="header__nav_list_item3">
                        <a className="header__nav_list_link3" href="#QuemSou">Quem Somos</a>
                    </li>
                    <li className="header__nav_list_button_wrapper">
                        <a href="#Agendamento">
                            <button type="button" className="header__nav_list_button">Agende Agora</button>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="hamburger-container" onClick={handleMenuToggle}>
                <div className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="mobile-menu__close" onClick={handleMenuToggle}>×</button>
                <ul className='mobile-menu__list'>
                    <li><a href='#' onClick={handleMenuToggle}>Serviços</a></li>
                    <li><a href='#' onClick={handleMenuToggle}>Quem Sou</a></li>
                    <li><a href='#' onClick={handleMenuToggle}>Agende agora</a></li>
                </ul>
            </nav>
        </header>
    )

}
export default Header
