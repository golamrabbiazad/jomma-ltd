import { Request, Response } from "express";
import {
  postTransactions,
  getTransactions,
} from "../service/TransactionsService";

export const createTransactions = async (req: Request, res: Response) => {
  try {
    const selectedItems = await req.body;

    if (!Array.isArray(selectedItems) || selectedItems.length === 0) {
      return res.status(400).json({ message: "invalid request data" });
    }

    const promises = selectedItems.map(async (item) => {
      const { unit_price, product_id } = item;
      await postTransactions(unit_price, product_id);
    });

    await Promise.all(promises);

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error Occurred: ", error);

    if (error instanceof Error) {
      console.error("Error Occurred: ", error.message);
    }

    res.status(500).json({ message: "internal server error" });
  }
};

export const getAllTransactions = async (req: Request, res: Response) => {
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
};
