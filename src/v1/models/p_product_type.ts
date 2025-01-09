import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const ProductTypesModel = db.define(
  "ProductTypes",
  {
    p_id_product_type: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    p_type_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "p_product_type",
    timestamps: false,
  },
);
