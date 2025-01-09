import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const CartModel = db.define(
  "Cart",
  {
    c_id_cart: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    c_id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c_id_product: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    c_quantity: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  },
  {
    tableName: "c_cart",
    timestamps: false,
  },
);

// Foreign Keys
CartModel.belongsTo(db.models.Users, {
  foreignKey: "c_id_user",
  as: "User",
});

CartModel.belongsTo(db.models.Product, {
  foreignKey: "c_id_product",
  as: "Product",
});
