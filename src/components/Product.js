import React from "react";
import Rating from "./Rating";

const Product = ({ name, size, image, rating }) => {
  return (
    <article className="productItem">
      <h4>{name}</h4>
      <img src={image} alt={name}></img>
      <Rating defaultRating={rating} />
    </article>
  );
};

export default Product;
