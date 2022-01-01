import { React, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import data from "../data";
import AddProduct from "./AddProduct";

const ProductTable = () => {
  const [products, setProducts] = useState(data);
  const categories = [200, 400, 800];

  const mapProducts = () =>
    products.map((article) => (
      <Product
        key={article.id}
        onDeleteClick={onDeleteClick}
        {...article}
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
  };

  const onAddClick = (product) => {
    setProducts([...products, product]);
    data.push(product);
  };

  const onDeleteClick = (productID) => {
    setProducts(products.filter((product) => product.id !== productID));
    data.splice(data.indexOf(productID), 1);
  };

  return (
    <>
      <h1>Übersicht Produkte</h1>
      <AddProduct onAddClick={onAddClick}></AddProduct>
      <Filter categories={categories} onFilterClick={onFilterClick} />
      <section id="products" className="products">
        {mapProducts()}
      </section>
    </>
  );
};

export default ProductTable;
