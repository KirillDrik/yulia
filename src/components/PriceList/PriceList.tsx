import React, { useState } from 'react';
import './PriceList.css';

interface PriceCard {
    id: number;
    title: string;
    category: string;
    image: string;
}

interface PriceListProps {
    onOpenModal: () => void;
}

const prices: PriceCard[] = [
    { id: 1, title: 'Портретная', category: 'portrait', image: '/images/price-portrait.jpg' },
    { id: 2, title: 'Свадебная', category: 'wedding', image: '/images/price-wedding.jpg' },
    { id: 3, title: 'Семейная', category: 'family', image: '/images/price-family.jpg' },
    { id: 4, title: 'Бизнес', category: 'business', image: '/images/price-business.jpg' },
    { id: 5, title: 'Студийная', category: 'studio', image: '/images/price-studio.jpg' },
    { id: 6, title: 'Рекламная', category: 'commercial', image: '/images/price-commercial.jpg' },
];

const categories = [
    { name: 'Все', value: 'all' },
    { name: 'Портретная', value: 'portrait' },
    { name: 'Свадебная', value: 'wedding' },
    { name: 'Семейная', value: 'family' },
    { name: 'Бизнес', value: 'business' },
    { name: 'Студийная', value: 'studio' },
    { name: 'Рекламная', value: 'commercial' },
];

const PriceList: React.FC<PriceListProps> = ({ onOpenModal }) => {
    const [filter, setFilter] = useState('all');

    const filteredPrices = prices.filter(card =>
        filter === 'all' || card.category === filter
    );

    return (
        <div className="price-list">
            <div className="filters">
                {categories.map(cat => (
                    <button
                        key={cat.value}
                        className={`filter-btn ${filter === cat.value ? 'active' : ''}`}
                        onClick={() => setFilter(cat.value)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="price-gallery">
                {filteredPrices.map(card => (
                    <div key={card.id} className="price-card">
                        <img src={card.image} alt={card.title} />
                        <div className="card-overlay">
                            {/* Заменяем <span> на <button> и добавляем класс btn */}
                            <button className="card-overlay-text" onClick={onOpenModal}>Оставить заявку</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceList;