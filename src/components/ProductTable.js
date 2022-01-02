import { React, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import data from "../data";
import AddProduct from "./AddProduct";

const ProductTable = () => {
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState();
  const sizes = [200, 400, 800];

  const mapProducts = () =>
    products.map((product) => (
      <Product
        key={product.id}
        onDeleteClick={onDeleteClick}
        updateRating={updateRating}
        {...product}
      ></Product>
    ));

  const onFilterClick = (size) => {
    let newProducts;

    if (size === undefined) {
      newProducts = [...data];
    } else {
      newProducts = data.filter((product) => product.size === size);
    }
    setProducts(newProducts);
    setFilter(size);
  };

  const onAddClick = (product) => {
    data.push(product);
    onFilterClick(filter);
  };

  const onDeleteClick = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    data.splice(data.indexOf(id), 1);
  };

  const updateRating = (id, rating) => {
    data.find((product) => product.id === id).rating = rating;
  };

  return (
    <>
      <h1>Übersicht Produkte</h1>
      <AddProduct sizes={sizes} onAddClick={onAddClick} />
      <Filter sizes={sizes} onFilterClick={onFilterClick} />
      <section className="products">{mapProducts()}</section>
    </>
  );
};

export default ProductTable;
