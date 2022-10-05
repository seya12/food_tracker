import React from "react";
import FilterButton from "./FilterButton";

const Filter = ({ sizes, currentFilter, onFilterClick }) => {
  return (
    <div className="filter-container">
      <FilterButton
        currentFilter={currentFilter}
        onFilterClick={onFilterClick}
      ></FilterButton>

      {sizes.map((size) => (
        <FilterButton
          currentFilter={currentFilter}
          key={size}
          size={size}
          onFilterClick={onFilterClick}
        ></FilterButton>
      ))}
    </div>
  );
};

export default Filter;
