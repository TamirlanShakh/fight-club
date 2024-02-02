import React from 'react';
import Slider from 'react-slick';
import box from '../images/box.jpg';
import mma from '../images/mma.jpg';
import bjj from '../images/bjj.png';
import thai from '../images/thai-box.jpg';
import './styles/Slider.scss';

const SimpleSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={box} alt="" />
            </div>
            <div>
                <img src={mma} alt="" />
            </div>
            <div>
                <img src={bjj} alt="" />
            </div>
            <div>
                <img src={thai} alt="" />
            </div>
        </Slider>
    );
};

export default SimpleSlider;
