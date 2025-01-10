import { UsersModel } from "../../models/u_user";

export const findUserById = async (id: number) => {
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
    return undefined;
  }
};
