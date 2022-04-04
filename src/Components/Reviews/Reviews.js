import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='review-container'>
            <h1 className='review-length'>Our Customer Reviews({reviews.length})</h1>
            <div className='review-card'>
                {
                    reviews.map(review =>
                        <div key={review.id} className='reviews'>
                            <div className='review-details'>
                                <div className='image'>
                                    <img src={review.picture} alt="" />
                                </div>
                                <h1 className='review-name'>{review.name}</h1>
                                <h3 className='review-ratings'>Ratings: <span className='rating-color'>{review.ratings}</span></h3>
                                <h3 className='review-text'>{review.text}</h3>
                            </div>
                        </div>)
                }
            </div>
        </div>

    );
};

export default Reviews;