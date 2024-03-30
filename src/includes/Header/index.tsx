import React from 'react';
import './Header.scss';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="header__top">
                    <nav className="nav-left">
                        <ul>
                            <li>
                                <Link to="">Зал</Link>
                            </li>
                            <li>
                                <Link to="">Секции</Link>
                            </li>
                            <li>
                                <Link to="/schedule">Расписание</Link>
                            </li>
                            <li>
                                <Link to="">Стоимость</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link to="/" className="header__logo">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                    <nav className="nav-right">
                        <ul>
                            <li>
                                <Link to="">Об Академии</Link>
                            </li>
                            <li>
                                <Link to="/coaches">Тренеры</Link>
                            </li>
                            <li>
                                <Link to="/reviews">Отзывы</Link>
                            </li>
                            <li>
                                <Link to="">Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__bottom">
                    <div className="address">
                        <PlaceIcon />
                        <div className="desc">
                            <span>г.Москва, ул. Первая 50 к1</span>
                            <span>метро Первая, Вторая</span>
                        </div>
                    </div>
                    <div className="schedule">
                        <AccessTimeIcon />
                        <div className="desc">
                            <span>ПН-ПТ 09:00-22:00 СБ 10:00-18:00</span>
                            <span>Воскресенье выходной</span>
                        </div>
                    </div>
                    <div className="call">
                        <div className="contacts">
                            <CallIcon />
                            <div className="desc">
                                <a href="tel:+" className="phone">
                                    +7 (999) 999-99-99
                                </a>
                                <span>Круглосуточно</span>
                            </div>
                        </div>
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
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
