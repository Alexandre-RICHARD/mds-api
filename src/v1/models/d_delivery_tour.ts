import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const DeliveryTourModel = db.define(
  "DeliveryTour",
  {
    d_id_delivery_tour: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    d_start_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    d_end_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    d_id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "d_delivery_tour",
    timestamps: false,
  },
);

// Foreign Key
DeliveryTourModel.belongsTo(db.models.Users, {
  foreignKey: "d_id_user",
  as: "User",
});
