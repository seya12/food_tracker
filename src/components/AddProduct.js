import { useState, React } from "react";

const AddProduct = ({ onAddClick }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(10);

  const submitData = (event) => {
    event.preventDefault();
    setId(id + 1);
    let intSize = parseInt(size, 10);
    onAddClick({ id, name, size: intSize, image });

    setName("");
    setImage("");
    setSize("");
  };

  //TODO: Format stuff + CSS + dynamic size
  return (
    <div>
      <button type="button" onClick={() => setShowForm(!showForm)}>
        Hinzufügen
      </button>
      {showForm && (
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label htmlFor="size">Kategorie</label>
          <select
            id="size"
            name="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="200">200g</option>
            <option value="400">400g</option>
            <option value="800">800g</option>
          </select>

          <label htmlFor="link">Bild Link</label>
          <input
            type="text"
            id="link"
            placeholder="Enter Link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>

          <input type="submit" onClick={(event) => submitData(event)}></input>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
