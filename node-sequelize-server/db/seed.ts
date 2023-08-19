import dotenv from "dotenv";
import { Products, Transactions } from "../model";
dotenv.config();

async function main() {
  // // Seed data for the Product entity
  const productsData = [
    {
      product_id: 1,
      product_name: "ROBI AXIATA LIMITED",
      product_code: "ROBI",
      unit_price: 100,
      gain_loss: 5,
      year_to_date: 2,
      active_status: 1,
    },
    {
      product_id: 2,
      product_name: "GRAMEEN PHONE",
      product_code: "GP",
      unit_price: 120,
      gain_loss: -10,
      year_to_date: 10,
    },
    {
      product_id: 3,
      product_name: "SQUARE PHARMACEUTICALS",
      product_code: "SQUAREPHRM",
      unit_price: 200,
      gain_loss: 20,
      year_to_date: 15.2,
      active_status: 1,
    },
  ];

  await Products.bulkCreate(productsData);

  console.log(` products seeded successfully!`);

  const transactionsData = [
    {
      transaction_id: 1,
      user_id: 1,
      product_id: 1,
      order_amount: 100,
      created_on: new Date(),
    },
    {
      transaction_id: 2,
      user_id: 1,
      product_id: 2,
      order_amount: 200,
      created_on: new Date(),
    },
  ];

  await Transactions.bulkCreate(transactionsData);

  console.log(`transactions seeded successfully!`);
}

main().catch((error) => console.log(error));
