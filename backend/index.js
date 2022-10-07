import express from "express";
import productRouter from "./routes/products.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
