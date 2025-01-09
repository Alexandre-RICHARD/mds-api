import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const DeliveryModel = db.define(
  "Delivery",
  {
    d_id_delivery: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    d_delivery_number: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    d_status: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    d_shipped_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    d_delivered_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    d_id_delivery_tour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "d_delivery",
    timestamps: false,
  },
);

// Foreign Key
DeliveryModel.belongsTo(db.models.DeliveryTours, {
  foreignKey: "d_id_delivery_tour",
  as: "DeliveryTour",
});
