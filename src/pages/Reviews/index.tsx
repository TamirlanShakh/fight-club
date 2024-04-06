import React, { useCallback, useEffect, useState } from 'react';
import './Reviews.scss';
import { Button, IconButton, Menu, MenuItem, Tab, Tabs, ToggleButton } from '@mui/material';
import Review from './Review.tsx';
import { reviews } from '../../utils/utils.js';
import { IReview } from './types.ts';

const Reviews = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [reviewSrc, setReviewSrc] = useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const openSelects = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleReviewClick = (src: string) => {
        setReviewSrc(src);
    };

    const filteredReviews = reviews.filter(review => reviewSrc === '' || review.src === reviewSrc);

    useEffect(() => {
        document.title = 'Отзывы';
    }, []);

    return (
        <>
            <section className="reviews">
                <div className="container">
                    <h1 className="reviews__title">
                        Отзывы <br />
                        <span>Fight club</span>
                    </h1>
                    <h3 className="reviews__subtitle">Мы признательны за ваши оценки. Спасибо!</h3>
                </div>
                <div className="container">
                    <div className="reviews__tabs">
                        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" className="reviews__tabs-head">
                            <Tab label="Все" onClick={() => handleReviewClick('')} />
                            <Tab label="2Gis" onClick={() => handleReviewClick('2gis')} />
                            <Tab label="Google" onClick={() => handleReviewClick('google')} />
                            <Tab label="Yandex" onClick={() => handleReviewClick('yandex')} />
                        </Tabs>
                        <div className="reviews__tabs-body">
                            <div className="reviews__tabs-stars">
                                <div className="score">4.9 из 5</div>
                                <div className="stars">
                                    <img src="../../images/icons/star.svg" alt="" />
                                    <img src="../../images/icons/star.svg" alt="" />
                                    <img src="../../images/icons/star.svg" alt="" />
                                    <img src="../../images/icons/star.svg" alt="" />
                                    <img src="../../images/icons/star.svg" alt="" />
                                </div>
                                <div className="desc">На основе 45 оценок</div>
                            </div>
                            <div className="reviews__tabs-button">
                                <ToggleButton
                                    value="web"
                                    className="button"
                                    onClick={handleClick}
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                >
                                    Оставить отзыв
                                </ToggleButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openSelects}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem className="reviews__tabs-button-option" onClick={handleClose}>
                                        <img src="../../images/icons/2gis.svg" alt="" />
                                    </MenuItem>
                                    <MenuItem className="reviews__tabs-button-option" onClick={handleClose}>
                                        <img src="../../images/icons/google.svg" alt="" />
                                    </MenuItem>
                                    <MenuItem className="reviews__tabs-button-option" onClick={handleClose}>
                                        <img src="../../images/icons/yandex.svg" alt="" />
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="reviews__list">
                        {filteredReviews.map(review => (
                            <Review key={review.id} review={review} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;
