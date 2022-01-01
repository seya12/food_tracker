import React from "react";
import Rating from "./Rating";

const Product = ({ onDeleteClick, id, name, size, image, rating }) => {
  return (
    <article className="productItem">
      <h4>{name}</h4>
      <button type="button" onClick={() => onDeleteClick(id)}>
        <span>&times;</span>
      </button>
      <img src={image} alt={name}></img>
      <Rating defaultRating={rating} />
    </article>
  );
};

export default Product;
