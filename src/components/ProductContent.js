import React from "react";

const ProductContent = (props) => {
  return (
    <>
      <img
        src={
          props.image ||
          "http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg"
        }
        alt={props.name}
      ></img>
      <div className="product-item">
        <h4>{`${props.name} (${props.size}g)`}</h4>
      </div>
    </>
  );
};

ProductContent.defaultProps = {
  name: "Name me",
};

export default ProductContent;
