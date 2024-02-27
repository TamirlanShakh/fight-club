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
                </div>
            </div>
        </div>
    );
};

export default About;
