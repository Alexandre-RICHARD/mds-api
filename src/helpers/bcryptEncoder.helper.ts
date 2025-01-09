import bcrypt from "bcrypt";

export const bcryptEncoderHelper = (rawPassword: string) => {
  const saltRounds = 10;
  bcrypt.hash(rawPassword, saltRounds, (_err, hash) => hash);
};
