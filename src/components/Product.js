import React from "react";
import Rating from "./Rating";

const Product = ({ name, size, image }) => {
  return (
    <article className="productItem">
      <h4>{name}</h4>
      <img src={image} alt={name}></img>
      <Rating />
    </article>
  );
};

export default Product;
