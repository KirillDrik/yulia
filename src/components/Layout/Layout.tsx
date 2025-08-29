import React from 'react';
import type {ReactNode} from 'react';
import './Layout.css';
import {FaInstagram, FaFacebook, FaTelegram} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => (
    <div>
        <header className="header">
            <
                div className="container">
                <div className="logo"><h1>GRUSHNIK</h1></div>
                <nav className="nav-center">
                    <ul> {/* Главная */}
                        <li><Link to="/">ГЛАВНАЯ</Link></li>
                        {/* Скролл внутри Home */}
                        <li><HashLink smooth to="/#gallery">ГАЛЕРЕЯ</HashLink></li>
                        <li><Link to="/price">ЦЕНА</Link></li>
                        <li><HashLink smooth to="/#about">ОБО МНЕ</HashLink></li>
                        <li><HashLink smooth to="/#contact">КОНТАКТЫ</HashLink></li>
                    </ul>
                </nav>

                <div className="networks"><a href="https://instagram.com" target="_blank"
                                             rel="noopener noreferrer"><FaInstagram/></a> <a href="https://facebook.com"
                                                                                             target="_blank"
                                                                                             rel="noopener noreferrer"><FaFacebook/></a>
                    <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"><FaTelegram/></a></div>
            </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
            <div className="container">
                <p>© 2025 Grushnik</p>
            </div>
        </footer>
    </div>
);

export default Layout;