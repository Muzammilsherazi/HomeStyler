import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import reviewsData from '../Json files/reviews.json';
import reviewsCss from './components-css/ReviewsData.module.css'

function ReviewsData() {

    // Function to render stars based on the rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <FaRegStar key={i} /> : <FaStar key={i} />);
        }
        return stars;
    };

    return (
        <>
            <div className={reviewsCss.reviewSection}>
                {reviewsData.map(review => (
                    <div className={reviewsCss.review} key={review.id}>
                        <div className={reviewsCss.image}>
                            <img src={review.image} alt={review.name} />
                        </div>
                        <h2 className={reviewsCss.h2}>{review.name}</h2>
                        <p className={reviewsCss.p}>{review.description}</p>
                        <div className={reviewsCss.icons}>
                            <i className={reviewsCss.i}>{renderStars(review.rating)}</i>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ReviewsData;
