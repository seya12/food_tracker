import React from "react";

const FilterButton = ({ size, currentFilter, onFilterClick }) => {
  return (
    <button
      className={`filter-button ${currentFilter === size ? "active" : ""}`}
      type="button"
      onClick={() => onFilterClick(size)}
    >
      {size ? size + "g" : "Alle"}
    </button>
  );
};

export default FilterButton;
