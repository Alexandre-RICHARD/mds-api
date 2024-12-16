import { UsersModel } from "../../models/u_user";

export const getUsersByRole = async (role: string) => {
  try {
    const users = await UsersModel.findAll({
      where: {
        u_role: role,
      },
    });
    return users;
  } catch (error) {
    console.error("Erreur lors de la connexion ou de la requête : ", error);
    return undefined;
  }
};
