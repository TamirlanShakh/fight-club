import React, { useEffect, useState } from 'react';
import './Academy.scss';
import { Link } from 'react-router-dom';
import { Dialog } from '@mui/material';

const Academy = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        document.title = 'Об Академии';
    }, []);

    return (
        <>
            <main className="academy">
                <section className="academy__top-about">
                    <div className="container">
                        <div className="academy__top-about-left">
                            <img src="/images/logo.png" alt="" />
                            <h1 className="title">
                                Академия единоборств <span>Fighting Club</span>
                            </h1>
                        </div>
                        <div className="academy__top-about-right">
                            <span>
                                Академия единоборств Fighting Club — одно из крупнейших и наиболее известных спортивных учреждений в России. Она была основана в
                                2023 году с целью подготовки профессиональных спортсменов в области боевых искусств.
                            </span>
                            <span>
                                Академия предлагает обучение по различным направлениям единоборств, включая бокс, бразильское джиу-джитсу, муай-тай, MMA и
                                многие другие.
                            </span>
                        </div>
                    </div>
                </section>
                <section className="academy__middle-about">
                    <div className="container">
                        <div className="title">
                            О создателе <br />
                            {/* <span>Fighting Club</span> */}
                        </div>
                        <div className="creator">
                            <span>Андрей Андреев</span> — владелец и главный тренер Fight Club, известен как один из самых успешных инструкторов боевых искусств
                            в Европе.
                        </div>
                        <img src="/images/creator.jpg" alt="" />
                        <p>«Для меня боевые искусства - это поиск чего-то внутреннего. Это не просто физическая дисциплина ».</p>
                    </div>
                </section>
                <section className="academy__bottom-about">
                    <div className="container">
                        <h2 className="title">СЕКЦИИ</h2>
                        <span className="subtitle">Групповые и индивидуальные занятия для детей и взрослых.</span>
                        <div className="academy__bottom-about-sections">
                            <div className="section" onClick={onOpen}>
                                <img src="/images/bjj.png" alt="" />
                                <span className="bjj">Джиу-джитсу(BJJ)</span>
                            </div>
                            <div className="section" onClick={onOpen}>
                                <img src="/images/mma.jpg" alt="" />
                                <span className="mma">ММА</span>
                            </div>
                            <div className="section" onClick={onOpen}>
                                <img src="/images/box.jpg" alt="" />
                                <span className="box">Бокс</span>
                            </div>
                            <div className="section" onClick={onOpen}>
                                <img src="/images/thai-box.jpg" alt="" />
                                <span className="thai">Тайский бокс</span>
                            </div>
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
                </section>
            </main>
        </>
    );
};

export default Academy;
