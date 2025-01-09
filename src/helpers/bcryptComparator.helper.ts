import bcrypt from "bcrypt";

export const bcryptComparatorHelper = (
  rawPassword: string,
  hashedPassword: string,
) => {
  bcrypt.compare(rawPassword, hashedPassword, (_err, result) => result);
};
