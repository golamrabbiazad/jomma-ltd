import { AppDataSource } from "../db/data-source";
import { Product, Transaction } from "../model/entity";

export const postTransactions = async (
  order_amount: number,
  product_id: number
) => {
  const connection = await AppDataSource.initialize();
  const transactionsRepository = connection.getRepository(Transaction);
  const productRepository = connection.getRepository(Product);

  try {
    const product = await productRepository.findOneBy({ product_id });

    if (!product) console.error("Please, provide a valid product id!");

    if (product) {
      await transactionsRepository.save({
        user_id: 1,
        order_amount,
        product,
        created_on: new Date(),
      });
    }
  } catch (error) {
    console.error("Error Occurred: ", error);
    throw new Error("Failed to save transaction");
  } finally {
    await connection.destroy();
  }
};

export const getTransactions = async () => {
  const connection = await AppDataSource.initialize();
  const transactionsRepository = connection.getRepository(Transaction);

  try {
    const transactions = await transactionsRepository.find();

    if (!transactions) console.error("Internal Error: Data are empty in DB!");

    return transactions;
  } catch (error) {
    console.error("Error Occurred: ", error);
  } finally {
    await connection.destroy();
  }
};
