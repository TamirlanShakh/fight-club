import React, { useCallback, useState } from 'react';
import './Reviews.scss';
import { Button, IconButton, Menu, MenuItem, Tab, Tabs, ToggleButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selected, setSelected] = React.useState(false);
    const [value, setValue] = React.useState(2);

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

    return (
        <>
            <section className="reviews">
                <div className="container">
                    <h1 className="reviews__title">Отзывы</h1>
                    <h3 className="reviews__subtitle">Мы признательны за ваши оценки. Спасибо!</h3>
                </div>
                <div className="container">
                    <div className="reviews__tabs">
                        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" className="reviews__tabs-head">
                            <Tab label="Все" />
                            <Tab label="2Gis" />
                            <Tab label="Google" />
                            <Tab label="Yandex" />
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
                        <div className="reviews__list-review">
                            <div className="reviews__list-info">
                                <img src="../../images/icons/user.svg" alt="" className="reviews__list-user" />
                                <div className="reviews__list-data">
                                    <div className="reviews__list-name">Андрей Андреев</div>
                                    <div className="reviews__list-stars">
                                        <img src="../../images/icons/star.svg" alt="" />
                                        <img src="../../images/icons/star.svg" alt="" />
                                        <img src="../../images/icons/star.svg" alt="" />
                                        <img src="../../images/icons/star.svg" alt="" />
                                        <img src="../../images/icons/star.svg" alt="" />
                                    </div>
                                    <div className="reviews_list-date">10 апреля 2024</div>
                                </div>
                            </div>
                            <div className="reviews__list-text">
                                Прекрасный клуб, отзывчивый персонал, который всегда найдет нужный для тебя подход, чистые залы, что не может не радовать, всем
                                советую!
                            </div>
                            <Link to="/" className="reviews__list-link">
                                Открыть Яндекс.Карты
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;
