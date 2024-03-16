import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Coach = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="coach">
                <div className="coach__desc">
                    <div className="coach__name">Алексей Алексеев</div>
                    <div className="coach__more">
                        <div className="coach__line">
                            <div className="title">Тренер по боксу</div>
                            <div className="desc">Действующий выступающий спортсмен. Кандидат в мастера спорта по боксу Стаж личных тренировок более 8 лет</div>
                        </div>
                        <div className="coach__another-info">
                            <ul>
                                <li className="title">Специализация</li>
                                <li>Персональные и групповые тренировки по боксу</li>
                                <li className="title">Достижения</li>
                                <li>Чемпион России по боксу</li>
                                <li className="title">Достижения</li>
                                <li>Чемпион России по боксу</li>
                                <li className="title">Достижения</li>
                                <li>Чемпион России по боксу</li>
                                <li className="title">Достижения</li>
                                <li>Чемпион России по боксу</li>
                            </ul>
                        </div>
                        <div className="coach__about">
                            <div className="title">О себе</div>
                            <div className="desc">
                                Практикую современный, интересный и действенный подход к занятиям. Я онлайн 24/7, консультирую своих клиентов по питанию и
                                тренировкам даже вне зала. Большое внимание на занятиях уделяю Вашему здоровью - ставлю технику, опираясь на физические
                                показатели и особенности. Работаю с любым возрастом, что позволяет образование.
                                <br />
                                <br /> Приходи ко мне, и я покажу на что ты способен!
                            </div>
                        </div>
                    </div>
                    <div className="coach__button">
                        <Button onClick={onOpen} variant="contained" endIcon={<ArrowForwardIosIcon fontSize={'small'} />}>
                            Записаться на тренировку
                        </Button>
                        <Dialog open={open} onClose={onClose}>
                            <h1>sadas</h1>
                        </Dialog>
                    </div>
                </div>
                <div className="coach__photo">
                    <img src="/images/coach.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Coach;
