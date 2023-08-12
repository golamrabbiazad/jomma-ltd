import dotenv from "dotenv";
dotenv.config();

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product, Transaction } from "../model/entity";
import oracle from "oracledb";

export const AppDataSource = new DataSource({
  type: "oracle",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  sid: "xe",
  serviceName: process.env.DB_NAME,
  driver: oracle,
  synchronize: true,
  logging: false,
  entities: [Product, Transaction],
  migrations: [],
  subscribers: [],
});
