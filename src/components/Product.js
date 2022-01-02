import React from "react";
import Rating from "./Rating";

const Product = (props) => {
  const id = props.id;
  const name = props.name;
  const updateRating = props.updateRating;
  const onDeleteClick = props.onDeleteClick;

  return (
    <article className="productItem">
      <div className="item">
        <h4>{`${name} (${props.size}g)`}</h4>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDeleteClick(id)}
        >
          <span>&times;</span>
        </button>
      </div>
      <img src={props.image} alt={name}></img>
      <Rating
        id={id}
        defaultRating={props.rating}
        updateRating={updateRating}
      />
    </article>
  );
};

export default Product;
