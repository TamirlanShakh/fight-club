import React from 'react';
import Header from '../../includes/Header/index.tsx';
import Footer from '../../includes/Footer/index.tsx';
import SimpleSlider from '../../slider/Slider.tsx';

const Home = () => {
    return (
        <>
            <Header />
            <SimpleSlider />
            <Footer />
        </>
    );
};

export default Home;
