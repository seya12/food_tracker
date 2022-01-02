import React from "react";
import FilterButton from "./FilterButton";

const Filter = ({ sizes, onFilterClick }) => {
  return (
    <div className="filter-container">
      <FilterButton onFilterClick={onFilterClick}></FilterButton>

      {sizes.map((size) => (
        <FilterButton
          key={size}
          size={size}
          onFilterClick={onFilterClick}
        ></FilterButton>
      ))}
    </div>
  );
};

export default Filter;
