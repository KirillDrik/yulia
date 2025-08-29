import React, { useState } from "react";
import "./Price.css";

const Price: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="price">
            <div className="container">
                <h2 className="premium-underline">Цены</h2>
                <p>Здесь будет описание цен на услуги фотографа 🙂</p>

                <div className="card" onClick={openModal}>
                    <div className="card-image">
                        <img src="public/images/0L0A6575-Edit копия.jpg" alt="Example" />
                        <div className="overlay">
                            <span className="overlay-text">ТФП-ПРАВИЛА</span>
                        </div>
                    </div>
                </div>


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









                {isModalOpen && (
                    <div className="modal1" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <span className="close" onClick={closeModal}>&times;</span>
                            <h2>ТФП-ПРАВИЛА</h2>
                            <p>Я профессиональный фотограф с опытом работы более 10 лет.
                                Мои работы включают портретную, свадебную и рекламную фотографию.
                                Я всегда стремлюсь передать эмоции и уникальность момента.Я профессиональный фотограф с опытом работы более 10 лет.
                                Мои работы включают портретную, свадебную и рекламную фотографию.
                                Я всегда стремлюсь передать эмоции и уникальность момента. Я профессиональный фотограф с опытом работы более 10 лет.
                                Мои работы включают портретную, свадебную и рекламную фотографию.
                                Я всегда стремлюсь передать эмоции и уникальность момента.

                                Я профессиональный фотограф с опытом работы более 10 лет.
                                Мои равадебную и рекламную фотографию.
                                Я всегда стремлюсь передать эмоции и уникальность момента.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Price;