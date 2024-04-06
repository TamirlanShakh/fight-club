import React from 'react';
import './Sections.scss';

const Sections = () => {
    return (
        <>
            <section className="sections">
                <div className="container">
                    <h1>
                        Секции и направления <br />
                        <span>Fighting Club</span>
                    </h1>
                    <div className="sections__list">
                        <div className="section" style={{ background: `url(/images/box.jpg)no-repeat center/cover` }}>
                            <div className="title">Бокс</div>
                            <div className="desc">
                                Бокс – это вид спорта, в котором два спортсмена соревнуются друг с другом, используя свои кулаки. Они одевают специальные
                                перчатки и наносят удары по телу своего противника.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sections;
