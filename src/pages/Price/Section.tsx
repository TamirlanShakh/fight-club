import React from 'react';
import ModalForm from '../../includes/ModalForm/index.tsx';

const Section = ({ price }) => {
    return (
        <>
            <div className={`price__list-item ${price?.name}`}>
                <div className={`image-wrapper ${price?.name}`}>
                    <img src={`${price?.img}`} alt="" />
                    <h3>{price?.desc}</h3>
                    <span>{price?.rusname}</span>
                </div>
                <div className="info">
                    <div className="info-prices">
                        <p>
                            Дети <span>{price.adult ? price.adult + ' руб.' : 'бесплатно'}</span>
                        </p>
                        <p>
                            Взрослые <span>{price.adult ? price.adult + ' руб.' : 'бесплатно'} </span>
                        </p>
                    </div>
                </div>
                <div className={`button ${price?.name}`}>
                    <ModalForm></ModalForm>
                </div>
            </div>
        </>
    );
};

export default Section;
