import { UsersModel } from "../../models/u_user";
import type { FindUserByIdArgs, FindUserByIdReturn } from "../../types";

export const findUserById = async ({
  id,
}: FindUserByIdArgs): FindUserByIdReturn => {
  try {
    const user = await UsersModel.findOne({
      where: {
        u_id_user: id,
      },
    });
    return user;
  } catch (error) {
    console.error(
      "findUserById => Erreur lors de la connexion ou de la requête : ",
      error,
    );
    return null;
  }
};
