import React from "react";
import FilterButton from "./FilterButton";

const Filter = ({ categories, onFilterClick }) => {
  return (
    <div className="filter-container">
      {categories.map((category) => (
        <FilterButton
          key={category}
          size={category}
          onFilterClick={onFilterClick}
        ></FilterButton>
      ))}
    </div>
  );
};

export default Filter;
