import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const ProductSpecificationsModel = db.define(
  "ProductSpecifications",
  {
    p_id_product_specification: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    p_specification_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    p_is_specific_value: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    p_possible_value: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    tableName: "p_product_specification",
    timestamps: false,
  },
);
