import React from "react";

const Product = ({ name, size, image }) => {
  return (
    <article>
      <h4>{name}</h4>
      <h5>{size}g</h5>
      <img src={image} alt={name}></img>
    </article>
  );
};

export default Product;
