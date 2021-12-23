import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Product name="Bubugaga"></Product>
      <Product name="Test"></Product>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
