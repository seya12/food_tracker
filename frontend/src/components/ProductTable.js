import { React, useState } from "react";
import Filter from "./Filter";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Title from "./Title";
import useProducts from "../hooks/useProducts";
import useSizes from "../hooks/useSizes";

//TODO: Create custom hooks
const ProductTable = () => {
  const { products, fetchProducts, addProduct } = useProducts();
  const { sizes } = useSizes();
  const [filter, setFilter] = useState();

  const filteredProducts = products.filter((p) => p.size === filter);

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

  const updateRating = async (sid, rating) => {
    const resp = await fetch("/products/rating", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sid, rating }),
    });

    fetchProducts();
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
    fetchProducts();
  };

  return (
    <>
      <div className="header">
        <Title />
        <AddProduct sizes={sizes} onAddClick={addProduct} />
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
