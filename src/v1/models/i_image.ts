import { DataTypes } from "sequelize";

import { database as db } from "../../database";

export const ImagesModel = db.define(
  "Images",
  {
    i_id_image: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    i_image: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  },
  {
    tableName: "i_image",
    timestamps: false,
  },
);
