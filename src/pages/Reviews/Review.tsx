import React from 'react';
import { Link } from 'react-router-dom';
import { IReview } from './types';

const Review = ({ review }: { review: IReview }) => {
    return (
        <div className="reviews__list-review">
            <div className="reviews__list-info">
                <img src="../../images/icons/user.svg" alt="" className="reviews__list-user" />
                <div className="reviews__list-data">
                    <div className="reviews__list-name">{review.name}</div>
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
            <div className="reviews__list-text">{review?.text}</div>
            <Link to="/" className="reviews__list-link">
                Открыть Яндекс.Карты
            </Link>
        </div>
    );
};

export default Review;
