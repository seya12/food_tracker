import React, { useState } from "react";

const Rating = ({ updateRating, id, defaultRating }) => {
  const maxStars = 5;

  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(0);

  const onClickEvent = (rating) => {
    setRating(rating);
    updateRating(id, rating);
  };

  return (
    <div className="rating">
      {[...Array(maxStars)].map((star, index) => {
        index++;

        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "active" : ""}
            onClick={() => onClickEvent(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
