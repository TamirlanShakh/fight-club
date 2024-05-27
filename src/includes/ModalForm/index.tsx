import { Button, Dialog } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from './PhoneInput.tsx';
import { Phone } from '@mui/icons-material';

const ModalForm = () => {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState<any>({});

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(formValues);

        setFormValues({
            [e.target.name]: e.target.value,
        });
    };

    const sendForm = () => {};

    return (
        <>
            <Button onClick={onOpen} variant="contained">
                Записаться
            </Button>
            <Dialog open={open} onClose={onClose}>
                <Dialog open={open} onClose={onClose} className="popup">
                    <div className="popup__container">
                        <div className="popup__title">Оставьте заявку.</div>
                        <div className="popup__subtitle">Мы свяжемся с вами, чтобы записать на тренировку в удобное для вас время</div>
                        <form action="">
                            <div className="popup__input">
                                <span>Ваше имя</span>
                                <input type="text" value={formValues?.name} onChange={onChange} name="name" placeholder="Введите ваше имя" required />
                            </div>
                            <div className="popup__input">
                                <span>Ваш телефон</span>
                                <PhoneInput formValuePhone={formValues} onChange={onChange} />
                            </div>
                            <div className="popup__button">
                                <button onClick={sendForm}>Записаться на тренировку</button>
                            </div>
                            <label htmlFor="" className="popup__privacy">
                                <input type="checkbox" checked />
                                <span>
                                    Я согласен с <Link to="">политикой конфиденциальности</Link>
                                </span>
                            </label>
                        </form>
                    </div>
                </Dialog>
            </Dialog>
        </>
    );
};

export default ModalForm;
