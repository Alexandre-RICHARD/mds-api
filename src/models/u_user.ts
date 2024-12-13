import { DataTypes } from "sequelize";

import { database as db } from "../database";

export const UsersModel = db.define(
  "Users",
  {
    u_id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    u_role: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    u_registered_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    u_lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    u_firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    u_mail_adress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    u_hashed_password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    u_adress_country: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    u_adress_region_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    u_adress_city: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    u_adress_location: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },
    u_adress_precision: {
      type: DataTypes.STRING(75),
      allowNull: true,
    },
    u_is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "u_user_data",
    timestamps: false,
  },
);
