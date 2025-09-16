import React, { useState } from 'react';
import type { ReactNode } from 'react';
import './Layout.css';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="logo"><h1 className="logo">GRUSHNIK</h1></div>

                    {/* Кнопка-бургер */}
                    <button
                        className={`burger ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Навигация */}
                    <nav className={`nav-center ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li><Link to="/" onClick={() => setMenuOpen(false)}>ГЛАВНАЯ</Link></li>
                            <li><HashLink smooth to="/#gallery" onClick={() => setMenuOpen(false)}>ГАЛЕРЕЯ</HashLink></li>
                            <li><Link to="/price" onClick={() => setMenuOpen(false)}>ЦЕНА</Link></li>
                            <li><HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>ОБО МНЕ</HashLink></li>
                            <li><HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>КОНТАКТЫ</HashLink></li>
                        </ul>
                    </nav>

                    <div className="networks">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://t.me/username" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    </div>
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
};

export default Layout;
