import { UsersModel } from "../../models/u_user";

export const findUserByEmail = async (email: string) => {
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
    return undefined;
  }
};
