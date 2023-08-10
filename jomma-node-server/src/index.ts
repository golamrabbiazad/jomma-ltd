import express from "express";
import cors from "cors";

import {
  getTransactions,
  postTransactions,
} from "../services/transactionService";
import { getProducts } from "../services/productService";

const PORT = 8080;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// get all the products from DB
app.get("/api/v1/products", async (req, res) => {
  try {
    const data = await getProducts();

    if (!data) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error Occurred: ", error);

    res.status(500).json({ message: "Internal server error" });
  }
});

// data submit to the DB
app.post("/api/v1/transactions", async (req, res) => {
  try {
    const selectedItems = await req.body;

    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
      return res.status(400).json({ message: "invalid request data" });
    }

    for (const item of selectedItems) {
      const { unit_price, product_id } = item;
      await postTransactions(unit_price, product_id);
    }

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error Occurred: ", error);

    if (error instanceof Error) {
      console.error("Error Occurred: ", error.message);
    }

    res.status(500).json({ message: "internal server error" });
  }
});

// get all the transactions from DB
app.get("/api/v1/transactions", async (req, res) => {
  try {
    const data = await getTransactions();

    if (!data) {
      return res.status(400).json({ message: "No data found" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error Occurred: ", error);

    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} 🚀`);
});
