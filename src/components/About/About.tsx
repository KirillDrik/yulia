import React from 'react';
import './About.css';
const About: React.FC = () => {
    return (
        <section id="about" className="about">
            <div className="about-card">
                <div className="about-text">
                    <h2 className="premium-underline">Обо мне</h2>
                    <p>
                        Я профессиональный фотограф с опытом работы более 10 лет.
                        Мои работы включают портретную, свадебную и рекламную фотографию.
                        Я всегда стремлюсь передать эмоции и уникальность момента.
                    </p>
                </div>
                <div className="about-photo">
                    <img src="/images/AboutMePhoto.jpg" alt="Фотограф Юлия" />
                </div>
            </div>
        </section>
    );
};

export default About;
