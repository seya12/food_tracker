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
