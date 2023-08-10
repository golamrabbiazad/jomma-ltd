import { AppDataSource } from "./data-source";
import { Product, Transaction } from "../model/entity";

async function main() {
  const connection = await AppDataSource.initialize();

  const productRepository = connection.getRepository(Product);
  const transactionRepository = connection.getRepository(Transaction);

  // Seed data for the Product entity
  const products = [
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
      active_status: 1,
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

  // Save each product into the database
  for (let i = 0; i < products.length; i++) {
    await productRepository.save(products[i]);
  }
  console.log("Product data seeded successfully!");

  const transactions = [
    {
      order_amount: 59.9,
      created_on: new Date(),
      product: products[0],
    },
  ];

  await transactionRepository.save(transactions);
  console.log("Transaction data seeded successfully!");

  await connection.destroy();
}

main().catch((error) => console.log(error));
