import React from "react";

const FilterButton = ({ size, onFilterClick }) => {
  return (
    <button
      className="filter-button"
      type="button"
      onClick={() => onFilterClick(size)}
    >
      {size ? size + "g" : "Alle"}
    </button>
  );
};

export default FilterButton;
