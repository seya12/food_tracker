import { db } from "../db.js";

export const getProducts = (req, res) => {
  const query = "select * from product";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

//TODO: Validation
export const addProduct = (req, res) => {
  const query = "insert into product (name, size, imageLink) values (?)";
  const values = [req.body.name, req.body.size, req.body.imageLink];
  db.query(query, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Success!");
  });
};
