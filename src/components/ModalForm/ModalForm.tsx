import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import Select from "react-select";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from "react-toastify";
import './ModalForm.css';

interface ModalFormProps {
    onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const options = [
        { value: "portrait", label: "Портретная" },
        { value: "wedding", label: "Свадебная" },
        { value: "commercial", label: "Рекламная" },
    ];



    // Новая функция для обработки ввода имени
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        // Регулярное выражение, которое пропускает только буквы, пробелы и дефисы
        const sanitizedInput = input.replace(/[^а-яА-Яa-zA-Z\s-]/g, '');
        setName(sanitizedInput);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        if (!phone && !email) {
            setError("Пожалуйста, оставьте телефон или email");
            return;
        }

        setError('');
        console.log({ phone, email });

        // 🎉 показываем тост
        toast.success("Заявка отправлена!", {
            position: "top-center",
            autoClose: 2000,
        });

        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <FaTimes />
                </button>
                <h3>Оставьте заявку</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Имя"  value={name}
                           onChange={handleNameChange} required />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <PhoneInput
                        country={'il'}
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
                    {error && <div className="error-message">{error}</div>}

                    <Select
                        menuPortalTarget={null}
                        options={options}
                        placeholder="Выберите вид съемки"
                        styles={{
                            control: (base) => ({
                                ...base,
                                backgroundColor: "rgba(0,0,0,0.4)",
                                cursor: "pointer",
                                backdropFilter: "blur(30px)",
                                WebkitBackdropFilter: "blur(30px)",
                                border: "1px solid white",
                                borderRadius: "5px",
                                padding: "2px",
                                color: "white",
                            }),
                            input: (base) => ({
                                ...base,
                                caretColor: "transparent",
                                margin: "0",
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
                                backgroundColor: "rgba(0,0,0,0.8)",
                                backdropFilter: "blur(5px)",
                                WebkitBackdropFilter: "blur(5px)",
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
                        required
                    />
                    <textarea placeholder="Ваше сообщение..." rows={4} />
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
