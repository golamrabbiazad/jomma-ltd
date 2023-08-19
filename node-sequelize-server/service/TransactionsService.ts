import { Transactions } from "../model";

export async function postTransactions(
  order_amount: number,
  product_id: number
) {
  try {
    await Transactions.create({
      user_id: 1,
      order_amount,
      product_id,
      created_on: new Date(),
    });

    console.log(`$order placed successfully.`);
  } catch (error) {
    console.error(error);
  }
}

export async function getTransactions() {
  try {
    const transactions = await Transactions.findAll();

    return transactions;
  } catch (error) {
    console.error(error);
  }
}
