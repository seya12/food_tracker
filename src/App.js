import React from "react";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div id="content">
        <Filter></Filter>
        <ProductTable></ProductTable>
      </div>
      <Footer />
    </div>
  );
};

export default App;