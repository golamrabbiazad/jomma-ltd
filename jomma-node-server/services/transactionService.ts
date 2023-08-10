import { AppDataSource } from "../db/data-source";
import { Transaction } from "../model/entity";

export const postTransactions = async (
  order_amount: number,
  product_id: number
) => {
  const connection = await AppDataSource.initialize();
  const transactionsRepository = connection.getRepository(Transaction);

  try {
    await transactionsRepository.save({
      order_amount,
      product: { product_id },
    });

    await connection.destroy();
  } catch (error) {
    console.error("Error Occurred: ", error);
    throw new Error("Failed to save transaction");
  }
};

export const getTransactions = async () => {
  const connection = await AppDataSource.initialize();

  const transactionsRepository = connection.getRepository(Transaction);

  const transactions = await transactionsRepository.find();

  if (!transactions) console.error("Internal Error: Data are empty in DB!");

  await connection.destroy();

  return transactions;
};
