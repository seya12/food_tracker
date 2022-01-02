import React from "react";
import Rating from "./Rating";

const Product = (props) => {
  const id = props.id;
  const name = props.name;
  const updateRating = props.updateRating;
  const onDeleteClick = props.onDeleteClick;

  return (
    <article className="card">
      
      <img src={props.image} alt={name}></img>
      <div className="product-item">
        <h4>{`${name} (${props.size}g)`}</h4>
        
      </div>
      <Rating
        id={id}
        defaultRating={props.rating}
        updateRating={updateRating}
      />
      <button
          className="delete-button"
          type="button"
          onClick={() => onDeleteClick(id)}
        >
          <span>&times;</span>
        </button>
    </article>
  );
};

export default Product;
