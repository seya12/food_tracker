import React from "react";

const DeleteButton = ({ onDeleteClick, id }) => {
  return (
    <button
      className="delete-button"
      type="button"
      onClick={() => onDeleteClick(id)}
    >
      <span>&times;</span>
    </button>
  );
};

export default DeleteButton;
