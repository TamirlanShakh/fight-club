import React from 'react';
import './Header.scss';
import logo from '../../images/logo.png';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';

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
                                <a href="">Зал</a>
                            </li>
                            <li>
                                <a href="">Секции</a>
                            </li>
                            <li>
                                <a href="">Расписание</a>
                            </li>
                            <li>
                                <a href="">Стоимость</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="/" className="header__logo">
                        <img src={logo} alt="" />
                    </a>
                    <nav className="nav-right">
                        <ul>
                            <li>
                                <a href="">Об Академии</a>
                            </li>
                            <li>
                                <a href="">Тренеры</a>
                            </li>
                            <li>
                                <a href="">Отзывы</a>
                            </li>
                            <li>
                                <a href="">Контакты</a>
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
                            <h1>sadas</h1>
                        </Dialog>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
