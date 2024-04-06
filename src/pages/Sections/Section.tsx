import React, { useState } from 'react';
import { Button, Dialog } from '@mui/material';
import { Link } from 'react-router-dom';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import GroupsIcon from '@mui/icons-material/Groups';

const Section = () => {
    const [open, setOpen] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);

    const onOpen = (section: string, buttonId: string) => {
        setSelectedSection(section);
        setOpen(true);
        const button = document.getElementById(buttonId);
        if (button) {
            button.blur(); // удаляем фокус с кнопки, чтобы диалоговое окно не закрывалось при клике вне его
        }
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="section box" style={{ background: `url(/images/box.jpg)no-repeat center/cover` }}>
                <div className="section-desc">
                    <div className="title">Бокс</div>
                    <div className="desc">
                        Бокс – это вид спорта, в котором два спортсмена соревнуются друг с другом, используя свои кулаки. Они одевают специальные перчатки и
                        наносят удары по телу своего противника.
                    </div>
                </div>
                <div className="section-other">
                    <div className="section-params">
                        <div className="param">
                            <div className="icon">
                                <EscalatorWarningIcon></EscalatorWarningIcon>
                            </div>
                            <span>для детей и взрослых</span>
                        </div>
                        <div className="param">
                            <div className="icon">
                                <GroupsIcon></GroupsIcon>
                            </div>
                            <span>индивидуально и групповые занятия</span>
                        </div>
                    </div>
                    <Button onClick={() => onOpen('box', 'box')} variant="contained" className="section-button box" id="box">
                        Записаться
                    </Button>
                    <Dialog open={open && selectedSection === 'box'} onClose={onClose} className="popup">
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
                </div>
            </div>
            <div className="section mma" style={{ background: `url(/images/mma.jpg)no-repeat center/cover` }}>
                <div className="section-desc">
                    <div className="title">MMA</div>
                    <div className="desc">
                        MMA – это вид единоборств, в котором бойцы используют различные техники из разных боевых искусств. В MMA разрешены удары руками и
                        ногами, а также использование болевых приемов и удушающих.
                    </div>
                </div>
                <div className="section-other">
                    <div className="section-params">
                        <div className="param">
                            <div className="icon">
                                <EscalatorWarningIcon></EscalatorWarningIcon>
                            </div>
                            <span>для детей и взрослых</span>
                        </div>
                        <div className="param">
                            <div className="icon">
                                <GroupsIcon></GroupsIcon>
                            </div>
                            <span>индивидуально и групповые занятия</span>
                        </div>
                    </div>
                    <Button onClick={() => onOpen('mma', 'mma')} variant="contained" className="section-button mma" id="mma">
                        Записаться
                    </Button>
                    <Dialog open={open && selectedSection === 'mma'} onClose={onClose} className="popup">
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
                </div>
            </div>
            <div className="section bjj" style={{ background: `url(/images/bjj.png)no-repeat center/cover` }}>
                <div className="section-desc">
                    <div className="title">Джиу-джитсу (BJJ)</div>
                    <div className="desc">
                        Бразильское джиу-джитсу – это боевое искусство и спорт, основанный на техниках борьбы в партере и на земле. Оно было разработано в
                        Бразилии Карлосом Грэйси в начале XX века и с тех пор стало популярным во всем мире.
                    </div>
                </div>
                <div className="section-other">
                    <div className="section-params">
                        <div className="param">
                            <div className="icon">
                                <EscalatorWarningIcon></EscalatorWarningIcon>
                            </div>
                            <span>для детей и взрослых</span>
                        </div>
                        <div className="param">
                            <div className="icon">
                                <GroupsIcon></GroupsIcon>
                            </div>
                            <span>индивидуально и групповые занятия</span>
                        </div>
                    </div>
                    <Button onClick={() => onOpen('bjj', 'bjj')} variant="contained" className="section-button bjj" id="bjj">
                        Записаться
                    </Button>
                    <Dialog open={open && selectedSection === 'bjj'} onClose={onClose} className="popup">
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
                </div>
            </div>
            <div className="section thai" style={{ background: `url(/images/thai-box.jpg)no-repeat center/cover` }}>
                <div className="section-desc">
                    <div className="title">Тайский бокс</div>
                    <div className="desc">
                        Муай-тай – это форма боевого искусства, зародившаяся в Таиланде. Это полноконтактный вид спорта, включающий в себя удары руками, ногами
                        и клинч.
                    </div>
                </div>
                <div className="section-other">
                    <div className="section-params">
                        <div className="param">
                            <div className="icon">
                                <EscalatorWarningIcon></EscalatorWarningIcon>
                            </div>
                            <span>для детей и взрослых</span>
                        </div>
                        <div className="param">
                            <div className="icon">
                                <GroupsIcon></GroupsIcon>
                            </div>
                            <span>индивидуально и групповые занятия</span>
                        </div>
                    </div>
                    <Button onClick={() => onOpen('thai', 'thai')} variant="contained" className="section-button thai" id="thai">
                        Записаться
                    </Button>
                    <Dialog open={open && selectedSection === 'thai'} onClose={onClose} className="popup">
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
                </div>
            </div>
        </>
    );
};

export default Section;
