import React from "react";
import ProductTable from "./components/ProductTable";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter></Filter>
      <ProductTable></ProductTable>
    </div>
  );
};

export default App;
