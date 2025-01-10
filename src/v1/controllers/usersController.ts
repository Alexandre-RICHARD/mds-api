import type { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { bcryptComparatorHelper } from "../../helpers/bcryptComparator.helper";
import { bcryptEncoderHelper } from "../../helpers/bcryptEncoder.helper";
import { RoleEnum } from "../enum/role.enum";
import { createUser } from "../query/users/createUser";
import { findUserByEmail } from "../query/users/findUserByEmail";
import { findUserById } from "../query/users/findUserById";
import { getUsersByRole } from "../query/users/getUsersByRole";
import { updateUser } from "../query/users/updateUser";
import type { LoginEndpointBody } from "../types/users/endpointBody/login.endpointBody.type";
import type { RegisterEndpointBody } from "../types/users/endpointBody/register.endpointBody.type";
import type { UpdateUserEndpointBody } from "../types/users/endpointBody/updateUser.endpointBody.type";

export const usersController = {
  getUsersByRole: async (req: Request, res: Response) => {
    const { role } = req.params;
    try {
      const results = await getUsersByRole(role);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json(["server-error", error]);
    }
  },

  register: async (req: Request, res: Response) => {
    const {
      lastname,
      firstname,
      mail,
      rawPassword,
      adressCountry,
      adressRegionCode,
      adressCity,
      adressLocation,
      adressPrecision,
    } = req.body as RegisterEndpointBody;

    try {
      const user = await createUser({
        role: RoleEnum.customer,
        registeredAt: new Date().toISOString(),
        lastname,
        firstname,
        mail,
        hashedPassword: await bcryptEncoderHelper(rawPassword),
        adressCountry,
        adressRegionCode,
        adressCity,
        adressLocation,
        adressPrecision,
        isDeleted: 0,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(501).json(error);
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, rawPassword } = req.body as LoginEndpointBody;

    const foundUserByMail = await findUserByEmail(email);
    if (!foundUserByMail) {
      return res.status(404).json("user_not_found_with_mail_adress");
    }

    const foundUserValues = foundUserByMail.dataValues;

    const isPasswordsMatches = await bcryptComparatorHelper(
      rawPassword,
      foundUserValues.u_hashed_password,
    );

    if (!isPasswordsMatches) {
      return res.status(403).json("wrong_credentials_for_login");
    }

    const expiresIn = 24 * 60 * 60;
    const token = jwt.sign(
      {
        fullname: `${foundUserValues.u_firstname} ${foundUserValues.u_lastname}`,
        role: foundUserValues.u_role,
        email: foundUserValues.u_mail_adress,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn,
        algorithm: "HS384",
      },
    );

    res.header("Authorization", `Bearer ${token}`);

    return res.status(200).json("auth_ok");
  },

  updateUser: async (req: Request, res: Response) => {
    const {
      userId,
      lastname,
      firstname,
      mail,
      rawPassword,
      adressCountry,
      adressRegionCode,
      adressCity,
      adressLocation,
      adressPrecision,
    } = req.body as UpdateUserEndpointBody;

    const userToUpdate = await findUserById(userId);

    if (!userToUpdate) {
      return res.status(404).json("user_not_found");
    }

    try {
      const user = await updateUser({
        user: userToUpdate,
        role: userToUpdate.dataValues.u_role,
        registeredAt: userToUpdate.dataValues.u_registered_at,
        lastname,
        firstname,
        mail,
        hashedPassword: await bcryptEncoderHelper(rawPassword),
        adressCountry,
        adressRegionCode,
        adressCity,
        adressLocation,
        adressPrecision,
        isDeleted: userToUpdate.dataValues.u_is_deleted,
      });

      return res.status(201).json(user);
    } catch (error) {
      return res.status(501).json(error);
    }
  },
};
