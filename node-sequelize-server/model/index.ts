import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const Products = sequelize.define(
  "PRODUCTS",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING(200),
    },
    product_code: {
      type: DataTypes.STRING(50),
    },
    unit_price: {
      type: DataTypes.DOUBLE,
    },
    gain_loss: {
      type: DataTypes.DOUBLE,
    },
    year_to_date: {
      type: DataTypes.DOUBLE,
    },
    active_status: {
      type: DataTypes.SMALLINT,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
    tableName: "PRODUCTS",
  }
);

export const Transactions = sequelize.define(
  "TRANSACTIONS",
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    order_amount: {
      type: DataTypes.DOUBLE,
    },
    created_on: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "TRANSACTIONS",
  }
);

Transactions.belongsTo(Products, {
  foreignKey: "product_id",
  targetKey: "product_id",
});

// Automatically create all tables
sequelize.sync();
