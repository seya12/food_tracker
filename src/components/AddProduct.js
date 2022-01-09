import { useState, React } from "react";

const AddProduct = ({ sizes, onAddClick }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [size, setSize] = useState(200);
  const [image, setImage] = useState("");
  const [id, setId] = useState(10);

  const submitData = (event) => {
    event.preventDefault();
    setId(id + 1);
    let intSize = parseInt(size, 10);
    onAddClick({ id, name, size: intSize, image });

    setName("");
    setImage("");
    setSize(200);
    setShowForm(!showForm);
  };

  return (
    <div className="add-container">
      <div className="add-button-container">
        <button type="button" onClick={() => setShowForm(!showForm)}>
          {!showForm ? "Hinzufügen" : "Schließen"}
        </button>
      </div>
      {showForm && (
        <div className="content-container">
          <form className="add-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Beschreibung"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>

            <label htmlFor="size">Größe:</label>
            <select
              id="size"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}g
                </option>
              ))}
            </select>

            <label htmlFor="link">Bildreferenz:</label>
            <input
              type="text"
              id="link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            ></input>

            <input
              type="submit"
              onClick={(event) => submitData(event)}
              value="Absenden"
            ></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
