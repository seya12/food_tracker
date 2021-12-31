import React from "react";

const Product = ({ name, size, image }) => {
  return (
    <article className="productItem">
      <h4>{name}</h4>
      <img src={image} alt={name}></img>
    </article>
  );
};

export default Product;
