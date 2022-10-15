import express from "express";
import productRouter from "./routes/products.js";
import categoryRouter from "./routes/categories.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
