import './Header.css'
import React from 'react';

function Header() {
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header__nav_list">
                    <li className="header__nav_list_item">
                        <a className="header__nav_list_link" href="#Hero">Natalia Kieling...</a>
                    </li>

                    {/* Novo grupo de links */}
                    <div className="header__links_group">
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
                    </div>
                </ul>
            </nav>
        </header>
    )
}
export default Header
