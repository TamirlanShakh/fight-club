import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="agreement">Нажимая "Отправить" вы даёте согласие на обработку ваших персональных данных</div>

            <div className="contact-nav">
                <div className="map-navigator"></div>
                <div className="contact-container">
                    <div className="contact-container__address">г. Москва, ул. Первая 50 к1</div>
                    <div className="contact-container__phones">+7 (999) 999-99-99 Круглосуточно </div>
                    <div className="contact-container__timetable">ПН-ПТ: с 9:00 до 22:00 СБ: с 10:00 до 18:00</div>
                </div>
            </div>
        </div>
    );
};

export default About;
