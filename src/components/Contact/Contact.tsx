import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTelegram, FaPhone } from 'react-icons/fa';
import './Contact.css';

interface ContactProps {
    onOpenModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenModal }) => {
    const [showPhone, setShowPhone] = useState(false);
    const phoneNumber = "+7 123 456 78 90";

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-card">
                    <h2 className="premium-underline">Контакты:</h2>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} /> Instagram
                    </a>
                    <a href="https://t.me/username" target="_blank" rel="noopener noreferrer">
                        <FaTelegram size={24} /> Telegram
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} /> Facebook
                    </a>

                    <div className="phone-field" onClick={() => setShowPhone(!showPhone)}>
                        <FaPhone style={{ marginRight: "8px" }} />
                        {showPhone ? phoneNumber : "Call me"}
                    </div>
                    <button className="phone-field" onClick={onOpenModal}>
                        Оставить заявку
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
