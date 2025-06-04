import type { Model } from "sequelize";
import type { DeleteUserArgs, DeleteUserReturn } from "../../types";

export const deleteUser = async ({ user }: DeleteUserArgs): DeleteUserReturn => {
  try {
    const deletedUser = await (user as Model).update({ u_is_deleted: true });
    return deletedUser;
  } catch (error) {
    console.error("deleteUser => Error when querying:", error);
    return null;
  }
};
