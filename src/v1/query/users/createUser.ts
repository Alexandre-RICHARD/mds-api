import { UsersModel } from "../../models/u_user";
import type { CreateUser } from "../../types/users/createUser.type";

export const createUser = async ({
  adressCity,
  adressCountry,
  adressLocation,
  adressPrecision,
  adressRegionCode,
  firstname,
  isDeleted,
  lastname,
  mail,
  hashedPassword,
  registeredAt,
  role,
}: CreateUser) => {
  try {
    const newUser = await UsersModel.create({
      u_role: role,
      u_registered_at: registeredAt,
      u_lastname: lastname,
      u_firstname: firstname,
      u_mail_adress: mail,
      u_hashed_password: hashedPassword,
      u_adress_country: adressCountry,
      u_adress_region_code: adressRegionCode,
      u_adress_city: adressCity,
      u_adress_location: adressLocation,
      u_adress_precision: adressPrecision,
      u_is_deleted: isDeleted,
    });
    return newUser;
  } catch (error) {
    console.error(
      "createUser => Erreur lors de la connexion ou de la requête : ",
      error,
    );
    return undefined;
  }
};
