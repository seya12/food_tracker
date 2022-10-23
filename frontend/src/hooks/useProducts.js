import { useCallback, useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([
    {
      sid: 0,
      name: "",
      size: 0,
      imageLink: "",
      rating: 0,
    },
  ]);

  const fetchProducts = useCallback(async () => {
    const p = await fetch("/products");
    setProducts(await p.json());
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addProduct = useCallback(
    async (product) => {
      const resp = await fetch("/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      console.log(resp);
      fetchProducts();
    },
    [fetchProducts]
  );

  return { products, fetchProducts, addProduct };
}
