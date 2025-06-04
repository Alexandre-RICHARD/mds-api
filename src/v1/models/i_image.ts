import { DataTypes, type ModelDefined } from "sequelize";

import { database as db } from "../../database";
import type { ImagesModelAttributes, ImagesCreationAttributes } from "../types";

export const ImagesModel: ModelDefined<
  ImagesModelAttributes,
  ImagesCreationAttributes
> = db.define(
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
