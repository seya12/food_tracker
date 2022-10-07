import { React, useEffect, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import data from "../data";
import AddProduct from "./AddProduct";
import Title from "./Title";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "",
      size: 0,
      image: "",
      rating: 0,
    },
  ]);
  const [filter, setFilter] = useState();
  const sizes = [200, 400, 800];

  useEffect(() => {
    async function fetchData() {
      const p = await fetch("/products");
      setProducts(await p.json());
    }
    fetchData();
  });

  //return array with custom product components
  const mapProducts = () =>
    products.map((product) => (
      <Product
        key={product.id} //so react can distinguish products
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
      <div className="header">
        <Title />
        <AddProduct sizes={sizes} onAddClick={onAddClick} />
        <Filter
          currentFilter={filter}
          sizes={sizes}
          onFilterClick={onFilterClick}
        />
        <div className="underline" />
      </div>
      <section className="products">{mapProducts()}</section>
    </>
  );
};

export default ProductTable;
