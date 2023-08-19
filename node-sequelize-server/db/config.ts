import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "oracle",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});
