import { Request, Response } from "express";
import { getProducts } from "../service/ProductsService";

export const getAllProducts = async (req: Request, res: Response) => {
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
};
