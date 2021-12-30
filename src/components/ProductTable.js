import React from "react";
import Product from "./Product";
import data from "../data";
const ProductTable = () => {
  return (
    <section id="products" className="products">
      {data.map((article) => (
        <Product key={article.id} {...article}></Product>
      ))}
    </section>
  );
};

export default ProductTable;
