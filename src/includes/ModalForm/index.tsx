import { Button, Dialog } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ModalForm = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={onOpen} variant="contained">
                Оформить
            </Button>
            <Dialog open={open} onClose={onClose}>
                <Dialog open={open} onClose={onClose} className="popup">
                    <div className="popup__container">
                        <div className="popup__title">Оставьте заявку.</div>
                        <div className="popup__subtitle">Мы свяжемся с вами, чтобы записать на тренировку в удобное для вас время</div>
                        <form action="">
                            <div className="popup__input">
                                <span>Ваше имя</span>
                                <input type="text" placeholder="Введите ваше имя" required />
                            </div>
                            <div className="popup__input">
                                <span>Ваш телефон</span>
                                <input type="text" placeholder="+7 (999) 999-99-99" required />
                            </div>
                            <div className="popup__button">
                                <button>Записаться на тренировку</button>
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
