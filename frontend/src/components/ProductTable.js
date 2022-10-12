import { React, useEffect, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Title from "./Title";

const ProductTable = () => {
  const [products, setProducts] = useState([
    {
      sid: 0,
      name: "",
      size: 0,
      imageLink: "",
      rating: 0,
    },
  ]);
  const [filter, setFilter] = useState();
  const sizes = [200, 400, 800];

  const filteredProducts = products.filter((p) => p.size === filter);

  useEffect(() => {
    async function fetchData() {
      const p = await fetch("/products");
      setProducts(await p.json());
    }
    fetchData();
  }, []);

  //return array with custom product components
  const mapProducts = () => {
    if (filter) {
      return getMappedProducts(filteredProducts);
    }
    return getMappedProducts(products);
  };

  const getMappedProducts = (products) =>
    products.map((product) => (
      <Product
        key={product.sid} //so react can distinguish products
        onDeleteClick={onDeleteClick}
        updateRating={updateRating}
        {...product}
      ></Product>
    ));

  const onFilterClick = (size) => {
    setFilter(size);
  };

  const onAddClick = async (product) => {
    const resp = await fetch("/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    console.log(resp);
    setProducts([...products, product]);
  };

  const onDeleteClick = (id) => {
    /*
    TODO: DELETE request to backend
    */
    setProducts(products.filter((product) => product.sid !== id));
  };

  const updateRating = (id, rating) => {
    /*
    TODO: PUT request to backend
    */
    const newArr = products.map((p) =>
      p.sid === id ? { ...p, rating: rating } : p
    );
    setProducts(newArr);
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
