import { database } from "../database";
import { UsersModel } from "../models/u_user";

export const findAllUSers = async () => {
  try {
    // Tester la connexion à la base de données
    await database.authenticate();
    const users = await UsersModel.findAll();
    console.log(users);
  } catch (error) {
    console.error("Erreur lors de la connexion ou de la requête :", error);
  } finally {
    await database.close();
  }
};
