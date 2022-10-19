import express from "express";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  updateRating,
} from "../controllers/products.js";

const router = express.Router();

//TODO: put & delete with custom url
//TODO: provide categories
router.get("/", getProducts);
router.post("/", addProduct);
router.put("/", updateProduct);
router.put("/rating", updateRating);
router.delete("/", deleteProduct);

export default router;
