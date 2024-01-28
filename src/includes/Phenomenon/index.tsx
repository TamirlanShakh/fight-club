import React from 'react';
import './Phenomenon.scss';

const Phenomenon = () => {
    return (
        <>
            <div className="phenomenons">
                <div className="phenomenons__top">
                    <div className="element mma">вода(мма)</div>
                    <div className="element bjj">земля(бжж)</div>
                </div>
                <div className="phenomenons__bottom">
                    <div className="element box">ветер(бокс)</div>
                    <div className="element thai-box">огонь(тайский)</div>
                </div>
            </div>
        </>
    );
};

export default Phenomenon;
