import type { UserModelAttributes } from "../models/u_user.type";

export type UserCreationAttributes = Omit<UserModelAttributes, "u_id_user">;
