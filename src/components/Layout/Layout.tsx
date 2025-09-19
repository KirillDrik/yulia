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
                    {/* Бургер-меню для мобильной версии */}
                    <button
                        className={`burger ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Меню навигации */}
                    <nav className={`nav-left ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li><Link to="/" onClick={() => setMenuOpen(false)}>ГЛАВНАЯ</Link></li>
                            <li><HashLink smooth to="/#gallery" onClick={() => setMenuOpen(false)}>ГАЛЕРЕЯ</HashLink></li>
                            <li><Link to="/price" onClick={() => setMenuOpen(false)}>ЦЕНЫ</Link></li>
                            <li><HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>ОБО МНЕ</HashLink></li>
                            <li><HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}>КОНТАКТЫ</HashLink></li>
                        </ul>
                    </nav>

                    {/* Логотип по центру */}
                    <div className="logo-center"><h1 className="logo">GRUSHNIK</h1></div>

                    {/* Социальные сети */}
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
                    <p className="premium-underline">© 2025 Grushnik</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;