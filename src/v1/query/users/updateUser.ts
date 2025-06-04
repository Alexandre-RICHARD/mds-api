import type { Model } from "sequelize";
import type { UpdateUserArgs, UpdateUserReturn } from "../../types";

export const updateUser = async ({
  user,
  updateData,
}: UpdateUserArgs): UpdateUserReturn => {
  try {
    const updatedUser = await (user as Model).update(updateData);
    return updatedUser;
  } catch (error) {
    console.error("updateUser => Error when querying:", error);
    return null;
  }
};
