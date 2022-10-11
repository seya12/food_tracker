import React from "react";

//object destructuring
const DeleteButton = ({ onDeleteClick, sid }) => {
  return (
    <button
      className="delete-button"
      type="button"
      onClick={() => onDeleteClick(sid)}
      // NOT onClick={onDeleteClick(id)}
    >
      <span>&times;</span>
      {/* shows X symbol */}
    </button>
  );
};

export default DeleteButton;
