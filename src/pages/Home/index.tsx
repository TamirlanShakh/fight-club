import React, { useState } from 'react';
import Header from '../../includes/Header/index.tsx';
import Footer from '../../includes/Footer/index.tsx';
import SimpleSlider from '../../slider/Slider.tsx';
import './Home.scss';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);

    const sportClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <>
            <Header />
            <div className="sports">
                <div className="sports__container container">
                    <div className="sports__top">
                        <div className={`sports__section mma ${isClicked ? 'is-clicked' : ''}`} onClick={sportClick}>
                            MMA
                        </div>
                        <div className="sports__section bjj">BJJ</div>
                    </div>
                    <div className="sports__bottom">
                        <div className="sports__section box">BOX</div>
                        <div className="sports__section thai">THAi</div>
                    </div>
                </div>
            </div>
            {/* <SimpleSlider /> */}
            {isClicked ? (
                <>
                    <div className="description">
                        <div className="description__container container">
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                            <h1>MMA</h1>
                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, incidunt quia. Nostrum ratione temporibus omnis, esse illo
                                et officia in suscipit consequuntur velit ducimus libero qui necessitatibus aliquam tempora veniam?
                            </span>
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
            <Footer />
        </>
    );
};

export default Home;
