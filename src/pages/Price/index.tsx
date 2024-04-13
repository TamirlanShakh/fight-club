import React from 'react';
import './Price.scss';
import ModalForm from '../../includes/ModalForm/index.tsx';
import { prices } from '../../utils/utils.js';
import Section from './Section.tsx';

const Price = () => {
    return (
        <>
            <main className="price">
                <section className="container">
                    <h1 className="price__title">
                        Стоимость <span>Fight club</span>
                    </h1>
                    <div className="price__list">
                        {prices.map(price => (
                            <Section price={price}></Section>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Price;
