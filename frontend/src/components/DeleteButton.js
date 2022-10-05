import React from "react";

//object destructuring
const DeleteButton = ({ onDeleteClick, id }) => {
  return (
    <button
      className="delete-button"
      type="button"
      onClick={() => onDeleteClick(id)}
      // NOT onClick={onDeleteClick(id)}
    >
      <span>&times;</span>
      {/* shows X symbol */}
    </button>
  );
};

export default DeleteButton;
