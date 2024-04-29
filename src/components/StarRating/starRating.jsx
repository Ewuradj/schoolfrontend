import React, { useState } from 'react';
import styles from './starRating.module.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.star} ${rating >= i ? styles.filled : ''}`}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={styles['star-rating']}>
      {/* <h2>Rate this item:</h2> */}
      <div className={styles.stars}>{renderStars()}</div>
      {rating > 0 && <p>You rated this item: {rating} stars</p>}
    </div>
  );
};

export default StarRating;