import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <img src="/images/logo.png" className="footer__logo" alt="" />
                    <div className="footer__info">
                        <span>© Fight Club, ООО «Файт Клаб» ИНН 0000000000</span>
                        <span>Все права защищены. Полное или частичное копирование информации с сайта запрещено.</span>
                        <span>Данный сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой.</span>
                    </div>
                    <Link to="" className="privacy">
                        Политика в отношении обработки персональных данных
                    </Link>
                </div>
            </footer>
        </>
    );
};

export default Footer;
