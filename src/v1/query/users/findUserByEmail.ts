import { UsersModel } from "../../models/u_user";
import type { FindUserByEmailArgs, FindUserByEmailReturn } from "../../types";

export const findUserByEmail = async ({
  email,
}: FindUserByEmailArgs): FindUserByEmailReturn => {
  try {
    const user = await UsersModel.findOne({
      where: {
        u_mail_adress: email,
      },
    });
    return user;
  } catch (error) {
    console.error(
      "findUserByEmail => Erreur lors de la connexion ou de la requête : ",
      error,
    );
    return null;
  }
};
