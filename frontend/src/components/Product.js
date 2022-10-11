import React from "react";
import DeleteButton from "./DeleteButton";
import ProductContent from "./ProductContent";
import Rating from "./Rating";

const Product = (props) => {
  const id = props.sid;
  const updateRating = props.updateRating;

  return (
    <article className="card">
      <DeleteButton {...props}></DeleteButton>
      {/* spread operator! see the difference below */}

      <ProductContent
        image={props.imageLink}
        name={props.name}
        size={props.size}
      />
      <Rating
        id={id}
        defaultRating={props.rating}
        updateRating={updateRating}
      />
    </article>
  );
};

export default Product;
