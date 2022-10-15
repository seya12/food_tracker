import { db } from "../db.js";

export const getCategories = (req, res) => {
  const query = "select * from category";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};
