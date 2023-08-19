import { Op } from "sequelize";
import { Products } from "../model";

export async function getProducts() {
  try {
    // find products where active_status is 1
    const products = await Products.findAll({
      where: {
        active_status: {
          [Op.eq]: 1,
        },
      },
    });
    return products;
  } catch (error) {
    console.error(error);
  }
}
