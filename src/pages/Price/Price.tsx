import React, { useState } from "react";
import "./Price.css";
import Sertificate from "../../components/Sertificate/Sertificate";
import PriceList from "../../components/PriceList/PriceList"; // Импортируем новый компонент
import ModalForm from "../../components/ModalForm/ModalForm";
import { ToastContainer } from "react-toastify";


const Price: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
        return (
            <>
                <div className="price">
                    <h2 className="premium-underline">Цены</h2>
                    <p>Здесь будет описание цен на услуги фотографа 🙂</p>

                    {/* 2. Передаём функцию openModal в PriceList */}
                    <PriceList onOpenModal={() => setShowModal(true)} />


                    <Sertificate />
                </div>

                {/* 3. Отображаем модальное окно, только если showModal === true */}
                {showModal && <ModalForm onClose={() => setShowModal(false)} />}

                {/* 4. Контейнер для уведомлений (Toast) */}
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    theme="dark"
                />
            </>
        );
    };

    export default Price;