import { UsersModel } from "../../models/u_user";
import type { UpdateUser } from "../../types/users/updateUser.type";

export const updateUser = async ({
  role,
  registeredAt,
  lastname,
  firstname,
  mail,
  hashedPassword,
  adressCountry,
  adressRegionCode,
  adressCity,
  adressLocation,
  adressPrecision,
  isDeleted,
}: UpdateUser) => {
  try {
    const updatedUser = await UsersModel.create({
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
    return updatedUser;
  } catch (error) {
    console.error(
      "createUser => Erreur lors de la connexion ou de la requête : ",
      error,
    );
    return undefined;
  }
};
