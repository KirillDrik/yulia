import React from 'react';
import './Hero.css';
interface HeroProps {
    onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                   <img className="logo-home" src="/images/grushnik-logo1.png" alt="Фотограф Юлия" />
                { /*     <h2 className="premium-underline">Yulia Grushnik</h2>  */}
                <p>Professional photographer</p>
                <button className="btn" onClick={onOpenModal}>Оставить заявку</button>
            </div>
        </section>
    );
};

export default Hero;
