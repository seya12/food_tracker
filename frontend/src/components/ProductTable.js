import { React, useEffect, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Title from "./Title";

//TODO: Create custom hooks
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
  const [sizes, setSizes] = useState([]);
  const [filter, setFilter] = useState();

  const filteredProducts = products.filter((p) => p.size === filter);

  useEffect(() => {
    async function fetchProductData() {
      const p = await fetch("/products");
      setProducts(await p.json());
    }
    fetchProductData();
  }, []);

  useEffect(() => {
    async function fetchSizes() {
      const p = await fetch("/categories");
      const res = await p.json();

      setSizes(res.map((c) => c.size));
    }
    fetchSizes();
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

  const updateRating = async (sid, rating) => {
    const resp = await fetch("/products/rating", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sid, rating }),
    });

    const newArr = products.map((p) =>
      p.sid === sid ? { ...p, rating: rating } : p
    );
    setProducts(newArr);
  };

  //TODO: Refetch products after delete
  const onDeleteClick = async (sid) => {
    const resp = await fetch("/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sid }),
    });
    setProducts(products.filter((product) => product.sid !== sid));
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
