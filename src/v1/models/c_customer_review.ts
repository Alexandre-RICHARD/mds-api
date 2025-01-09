import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const CustomerReviewModel = db.define(
  "CustomerReview",
  {
    c_id_customer_review: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    c_review_content: {
      type: DataTypes.STRING(5000),
      allowNull: false,
    },
    c_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    c_rediged_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    c_id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    c_id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "c_customer_review",
    timestamps: false,
  },
);

// Foreign Keys
CustomerReviewModel.belongsTo(db.models.Users, {
  foreignKey: "c_id_user",
  as: "User",
});

CustomerReviewModel.belongsTo(db.models.Product, {
  foreignKey: "c_id_product",
  as: "Product",
});
