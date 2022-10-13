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
  const query = "insert into product (name, size, imageLink) values (?, ?, ?)";
  const values = [req.body.name, req.body.size, req.body.imageLink];
  db.query(query, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Success!");
  });
};

export const updateProduct = (req, res) => {
  const query =
    "update product set name = ?, size = ?, imageLink = ? where sid = ?";
  const values = [
    req.body.name,
    req.body.size,
    req.body.imageLink,
    req.body.sid,
  ];

  db.query(query, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Success!");
  });
};

export const deleteProduct = (req, res) => {
  const query = "delete from product where sid = ?";
  const values = [req.body.sid];

  db.query(query, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Success!");
  });
};
