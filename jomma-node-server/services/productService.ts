import { AppDataSource } from "../db/data-source";
import { Product } from "../model/entity";

export const getProducts = async () => {
  const connection = await AppDataSource.initialize();
  const productsRepository = connection.getRepository(Product);

  try {
    const products = await productsRepository.find({
      where: { active_status: 1 },
    });

    if (!products || products.length === 0) {
      console.error("Internal Error: Data is empty in DB!");
      return null;
    }

    return products;
  } catch (error) {
    console.error("Error Occurred: ", error);
    throw new Error("Failed to retrieve products");
  } finally {
    await connection.destroy();
  }
};
