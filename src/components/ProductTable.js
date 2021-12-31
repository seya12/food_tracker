import { React, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import data from "../data";

const ProductTable = () => {
  const [products, setProducts] = useState(data);
  const categories = [200, 400, 800];

  const mapProducts = () =>
    products.map((article) => (
      <Product key={article.id} {...article}></Product>
    ));

  const onFilterClick = (size) => {
    let newProducts;

    if (size === undefined) {
      newProducts = [...data];
    } else {
      newProducts = data.filter((product) => product.size === size);
    }
    setProducts(newProducts);
  };

  return (
    <>
      <h1>Übersicht Produkte</h1>
      <Filter categories={categories} onFilterClick={onFilterClick} />
      <section id="products" className="products">
        {mapProducts()}
      </section>
    </>
  );
};

export default ProductTable;
