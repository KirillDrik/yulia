import React, { useState } from 'react';
import './Home.css';
import { FaTimes } from "react-icons/fa";
import Select from "react-select";
import { FaInstagram, FaFacebook, FaTelegram, FaPhone } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const Home: React.FC = () => {
    interface Image {
        id: number;
        url: string;
    }

    interface Album {
        id: number;
        title: string;
        thumbnail: string;
        images: Image[];
    }

    // ← Хук useState здесь, до return
    const [showModal, setShowModal] = useState(false);
    const [phone, setPhone] = useState('');
    // const [albums, setAlbums] = useState<Album[]>([]);
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

    const albums: Album[] = [
        {
            id: 1,
            title: "Свадебная фотосъёмка",
            thumbnail: "public/images/0L0A6575-Edit копия.jpg",
            images: [
                { id: 1, url: "public/images/0L0A6575-Edit копия.jpg" },
                { id: 2, url: "public/images/0L0A6575-Edit копия.jpg" },
            ],
        },
        {
            id: 2,
            title: "Портретная фотосъёмка",
            thumbnail: "public/images/0L0A6590-Edit.jpg",
            images: [
                { id: 1, url: "public/images/0L0A6590-Edit.jpg" },

            ],
        },
        {
            id: 3,
            title: "Какая-то фотосъёмка",
            thumbnail: "public/images/0L0A6590-Edit.jpg",
            images: [
                { id: 1, url: "public/images/0L0A6590-Edit.jpg" },

            ],
        },
        {
            id: 4,
            title: "Бла бла фотосъёмка",
            thumbnail: "public/images/0L0A6575-Edit копия.jpg",
            images: [
                { id: 1, url: "public/images/0L0A6575-Edit копия.jpg" },
                { id: 2, url: "public/images/0L0A6575-Edit копия.jpg" },
            ],
        },
    ];


    const [showPhone, setShowPhone] = useState(false); // для показа номера
    const phoneNumber = "+7 123 456 78 90"; // сюда ваш номер




    const options = [
        { value: "portrait", label: "Портретная" },
        { value: "wedding", label: "Свадебная" },
        { value: "commercial", label: "Рекламная" },
    ];
    return (
        <div>
            {/* Hero-секция */}
            <section id="hero" className="hero">
                <div className="container">
                    <h2 className="premium-underline">Yulia Grushnik </h2>
                    <p>Professional photographer</p>
                    <button className="btn" onClick={() => setShowModal(true)}>
                        Оставить заявку
                    </button>
                </div>
            </section>



            {/* gallery */}
            <section id="gallery" className="gallery">
                <div className="container">
                    <h2 className="premium-underline">Галерея</h2>
                    <div className="albums-grid">
                        {albums.map(album => (
                            <div key={album.id} className="album-card" onClick={() => setSelectedAlbum(album)}>
                                <img src={album.thumbnail} alt={album.title} />
                                <p>{album.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Модальное окно с выбранным альбомом */}
            {selectedAlbum && (
                <div className="modal-overlay" onClick={() => setSelectedAlbum(null)}>
                    <div className="modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedAlbum(null)}>
                            <FaTimes />
                        </button>
                        <h3>{selectedAlbum.title}</h3>
                        <div className="album-images">
                            {selectedAlbum.images.map(img => (
                                <img key={img.id} src={img.url} alt={`Фото ${img.id}`} />
                            ))}
                        </div>
                    </div>
                </div>
            )}


            {/* О себе */}
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
                        <img src="/images/about-photo.jpg" alt="Фотограф Юлия" />
                    </div>
                </div>
            </section>

            {/* Контакты */}
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact-card">
                        <h2 className="premium-underline">Контакты:</h2>  {/* Заголовок теперь внутри блока */}

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
                        <button className="phone-field" onClick={() => setShowModal(true)}>
                            Оставить заявку
                        </button>
                    </div>
                </div>
            </section>


            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowModal(false)}>
                            <FaTimes />
                        </button>

                        <h3>Оставьте заявку</h3>
                        <form>
                            <input type="text" placeholder="Имя" required />
                            <input type="email" placeholder="Email" required />
                            <PhoneInput
                                country={'il'}            // стартовая страна
                                value={phone}
                                onChange={phone => setPhone(phone)}

                                inputStyle={{
                                    width: '100%',
                                    padding: '10px',
                                    borderRadius: 'var(--btn-radius)',
                                    border: '1px solid #ccc',
                                    fontFamily: 'var(--font-main)',
                                    fontSize: '17px',
                                    color: 'var(--color-text)',
                                    backgroundColor: 'var(--color-bg)',
                                    backdropFilter: 'blur(var(--blur-small))',
                                }}
                                buttonStyle={{
                                    border: 'none',
                                    background: 'transparent',
                                }}
                            />

                            {/* Новый селект */}
                            <Select
                                options={options}
                                placeholder="Выберите вид съемки"
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: "rgba(0,0,0,0.4)",
                                        cursor: "pointer",
                                        backdropFilter: "blur(30px)",
                                        WebkitBackdropFilter: "blur(30px)", // для Safari
                                        border: "1px solid white",
                                        borderRadius: "5px",
                                        padding: "2px",
                                        color: "white",

                                    }),
                                    input: (base) => ({
                                        ...base,
                                        caretColor: "transparent",
                                        margin: "0",//  убирает мигание
                                    }),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "white",
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: "#ccc",
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        backgroundColor: "rgba(0,0,0,0.4)",
                                        backdropFilter: "blur(30px)",       //  делаем блюр
                                        WebkitBackdropFilter: "blur(30px)", // для Safari
                                        border: "1px solid white",
                                        borderRadius: "8px",
                                    }),
                                    option: (base, { isFocused }) => ({
                                        ...base,
                                        backgroundColor: isFocused
                                            ? "var(--color-button)"
                                            : "transparent",
                                        color: "white",
                                        cursor: "pointer",
                                    }),
                                }}
                                required  />
                            <textarea placeholder="Ваше сообщение..." rows={4} />
                            <button type="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;