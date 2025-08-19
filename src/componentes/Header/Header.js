import './Header.css'

function Header() {
    return (
        <header className="header">
            <nav className="header_nav">
                <ul className="header__nav_list">
                    <li className="header__nav_list_item">
                        <a className="header__nav_list_link" href="#">Natalia Kieling...</a>
                    </li>
                    <li className="header__nav_list_item2">
                        <a className="header__nav_list_link2" href="#">Serviços</a>
                    </li>
                    <li className="header__nav_list_item3">
                        <a className="header__nav_list_link3" href="#">Quem Somos</a>
                    </li>
                    <li className="header__nav_list_button_wrapper">
                        <button type="button" className="header__nav_list_button">Agende Agora</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
