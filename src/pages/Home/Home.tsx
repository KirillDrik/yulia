import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Gallery from '../../components/Gallery/Gallery';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import ModalForm from '../../components/ModalForm/ModalForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Home.css';

const Home: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const albums = [
        { id: 1, title: "Свадебная фотосъёмка", thumbnail: "/images/0L0A6575-Edit копия.jpg", images: [{ id: 1, url: "/images/0L0A6575-Edit копия.jpg" }] },
        { id: 2, title: "Портретная фотосъёмка", thumbnail: "/images/0L0A6590-Edit.jpg", images: [{ id: 1, url: "/images/0L0A6590-Edit.jpg" }] },
    ];

    return (
        <>
            <Hero onOpenModal={() => setShowModal(true)} />
            <Gallery albums={albums} />
            <About />
            <Contact onOpenModal={() => setShowModal(true)} />
            {showModal && <ModalForm onClose={() => setShowModal(false)} />}

            {/* Контейнер тостов */}
            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="dark"
            />
        </>
    );
};

export default Home;
