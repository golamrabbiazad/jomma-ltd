import express from "express";
import cors from "cors";

import { getAllProducts } from "../controller/ProductsController";
import {
  createTransactions,
  getAllTransactions,
} from "../controller/TransactionsController";

const PORT = 8080;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// get all the products from DB
app.get("/api/v1/products", getAllProducts);

// data submit to the DB
app.post("/api/v1/transactions", createTransactions);

// get all the transactions from DB
app.get("/api/v1/transactions", getAllTransactions);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} 🚀`);
});
