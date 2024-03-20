import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ICoach } from './types';

interface CoachProps {
    sports: any;
    coaches: ICoach[];
    selectedSport: string;
    handleChange: (event: any) => void;
}

const Coach = ({ sports, coaches, selectedSport, handleChange }: CoachProps) => {
    const [open, setOpen] = useState(false);
    const [selectedCoach, setSelectedCoach] = useState<ICoach | null>(null);

    const onOpen = (coach: ICoach) => {
        setSelectedCoach(coach);
        setOpen(true);
    };

    const onClose = () => {
        setSelectedCoach(null);
        setOpen(false);
    };

    const filteredCoaches = coaches.filter(coach => coach.sport === selectedSport || selectedSport === '');

    return (
        <>
            {filteredCoaches.map((coach: ICoach) => {
                return (
                    <div className={`coach ${coach.sport}`} key={coach.id}>
                        <div className="coach__desc">
                            <div className="coach__name">{coach?.name}</div>
                            <div className="coach__more">
                                <div className="coach__line">
                                    <div className="title">{coach?.position}</div>
                                    <div className="desc">{coach?.experience}</div>
                                </div>
                                <div className="coach__another-info">
                                    <ul>
                                        <li className="title">Специализация</li>
                                        <li>Персональные и групповые тренировки по боксу</li>
                                        <li className="title">Достижения</li>
                                        {coach.achievements.map((achievement, index) => (
                                            <li key={index}>{achievement}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="coach__about">
                                    <div className="title">О себе</div>
                                    <div className="desc">
                                        {coach?.about}
                                        <br />
                                        <br /> Приходи ко мне, и я покажу на что ты способен!
                                    </div>
                                </div>
                            </div>
                            <div className="coach__button">
                                <Button onClick={() => onOpen(coach)} variant="contained" endIcon={<ArrowForwardIosIcon fontSize={'small'} />}>
                                    Записаться на тренировку
                                </Button>
                                <Dialog open={open} onClose={onClose} className="popup__coach">
                                    <div className="popup__coach-container">
                                        <img src={selectedCoach?.img} alt="" className="popup__coach-photo" />
                                        <div className="popup__coach-info">
                                            <div className="popup__coach-title">Оставьте заявку.</div>
                                            <div className="popup__coach-subtitle">
                                                Мы свяжемся с вами, чтобы записать на тренировку в удобное для вас время
                                            </div>
                                            <form action="">
                                                <div className="popup__input">
                                                    <span>Ваше имя</span>
                                                    <input type="text" placeholder="Введите ваше имя" />
                                                </div>
                                                <div className="popup__input">
                                                    <span>Ваш телефон</span>
                                                    <input type="text" placeholder="+7 (999) 999-99-99" />
                                                </div>
                                                <div className="popup__button">
                                                    <button>Записаться на тренировку</button>
                                                </div>
                                                <label htmlFor="" className="popup__privacy">
                                                    <input type="checkbox" checked />
                                                    <span>
                                                        Я согласен с <a href="">политикой конфиденциальности</a>
                                                    </span>
                                                </label>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                        <div className="coach__photo">
                            <img src={coach?.img} alt="" />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Coach;
