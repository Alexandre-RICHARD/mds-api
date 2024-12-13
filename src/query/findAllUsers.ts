import { database } from "../database";
import { UsersModel } from "../models/u_user";

export const findAllUSers = async () => {
  try {
    const users = await UsersModel.findAll();
    return users;
  } catch (error) {
    console.error("Erreur lors de la connexion ou de la requête :", error);
    return undefined;
  } finally {
    await database.close();
  }
};
