import { DataTypes, type ModelDefined } from "sequelize";

import { database as db } from "../../database";
import type {
  ProductHasSpecificationModelAttributes,
  ProductHasSpecificationCreationAttributes,
} from "../types";

export const ProductHasSpecificationModel: ModelDefined<
  ProductHasSpecificationModelAttributes,
  ProductHasSpecificationCreationAttributes
> = db.define(
  "ProductHasSpecification",
  {
    p_id_product_has_specification: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    p_id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    p_id_product_specification: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    p_product_specification_value: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    tableName: "p_product_has_specification",
    timestamps: false,
  },
);

// Foreign Keys
ProductHasSpecificationModel.belongsTo(db.models.Product, {
  foreignKey: "p_id_product",
  as: "Product",
});

ProductHasSpecificationModel.belongsTo(db.models.ProductSpecification, {
  foreignKey: "p_id_product_specification",
  as: "ProductSpecification",
});
