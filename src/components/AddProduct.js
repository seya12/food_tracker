import { useState, React } from "react";

const AddProduct = ({ onAddClick }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(10);

  //TODO: Format stuff + CSS + dynamic category
  return (
    <div>
      <button type="button" onClick={() => setShowForm(!showForm)}>
        Add
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

          <label htmlFor="category">Kategorie</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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

          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setId(id + 1);
              onAddClick({ id, name, category, image });
            }}
          ></input>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
