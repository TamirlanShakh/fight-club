import React from 'react';
import Header from '../../includes/Header/index.tsx';
import Footer from '../../includes/Footer/index.tsx';
import SimpleSlider from '../../slider/Slider.tsx';
import Phenomenon from '../../includes/Phenomenon/index.tsx';

const Home = () => {
    return (
        <>
            <Header />
            <Phenomenon />
            {/* <SimpleSlider /> */}
            <Footer />
        </>
    );
};

export default Home;
