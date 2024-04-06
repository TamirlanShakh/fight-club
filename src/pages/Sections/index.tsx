import React from 'react';
import './Sections.scss';
import Section from './Section.tsx';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Sections = () => {
    return (
        <>
            <main className="sections">
                <section className="container">
                    <h1>
                        Секции и направления <br />
                        <span>Fight Club</span>
                    </h1>
                    <div className="sections__list">
                        <Section></Section>
                    </div>
                </section>
                <section className="sections__banner" style={{ backgroundImage: `url(/images/gym.jpeg)` }}>
                    <div className="container">
                        <div className="sections__banner-title">
                            Спортивный зал <br />
                            <span>Figth Club</span>
                        </div>
                        <div className="sections__banner-desc">
                            <span className="desc">
                                {' '}
                                Figth Club оснащена современными залами для тренировок, оборудованными всем необходимым инвентарем для эффективных занятий.
                                Тренеры зала – это опытные и профессиональные инструкторы, которые внимательно относятся к каждому ученику и стремятся передать
                                свои знания и навыки.{' '}
                            </span>
                            <Button variant="contained">
                                <Link to={'/gym'} className="gym-link">
                                    <span>Подробнее</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
                <div className="sections__links container sections__list">
                    <div className="section" style={{ background: `url(/images/link-schedule.jpg)no-repeat center/cover` }}>
                        <Link to={'/schedule'} className="link">
                            <div className="section-desc">
                                <div className="title">Расписание занятий</div>
                                <div className="desc">Актуальное расписание индивидуальных, персональных тренировок и групповых занятий.</div>
                            </div>
                            <div className="section-other">
                                <Button variant="contained">
                                    <span>Подробнее</span>
                                </Button>
                            </div>
                        </Link>
                    </div>
                    <div className="section" style={{ background: `url(/images/link-price.jpg)no-repeat center/cover` }}>
                        <Link to={'/prices'} className="link">
                            <div className="section-desc">
                                <div className="title">Стоимость</div>
                                <div className="desc">
                                    {' '}
                                    Стоимость посещения индивидуальных, персональных тренировок и групповых занятий.
                                    <br />
                                    <br />
                                    Купите со скидкой абонемент в спортивный зал.
                                </div>
                            </div>
                            <div className="section-other">
                                <Button variant="contained">
                                    <span>Подробнее</span>
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Sections;
