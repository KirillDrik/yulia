

import React from "react";
import './Sertificate.css';

const Sertificate: React.FC = () => {
    return (
        <section id="sertif" className="sertif">
            <div className="sertif-card">
                <div className="sertif-text">
                    <h2 className="premium-underline">Сертификаты</h2>
                    <p>
                        Я профессиональный фотограф с опытом работы более 10 лет.
                        Мои работы включают портретную, свадебную и рекламную фотографию.
                        Я всегда стремлюсь передать эмоции и уникальность момента.
                    </p>
                </div>
                <div className="sertif-photo">
                    <img src="/images/about-photo.jpg" alt="Фотограф Юлия" />
                </div>
            </div>
        </section>
    );
};

export default Sertificate;