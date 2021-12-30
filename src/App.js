import React from "react";
import Header from "./components/Header";
import ProductTable from "./components/ProductTable";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div id="content">
        <ProductTable></ProductTable>
      </div>
      <Footer />
    </div>
  );
};

export default App;
