import dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product, Transaction } from "../model/entity";

export const AppDataSource = new DataSource({
  type: "oracle",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
  sid: "xe",
  synchronize: true,
  logging: false,
  entities: [Product, Transaction],
  migrations: [],
  subscribers: [],
});
