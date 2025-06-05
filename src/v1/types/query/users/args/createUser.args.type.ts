export type CreateUserArgs = {
  role: string;
  registeredAt: Date;
  lastname: string;
  firstname: string;
  mail: string;
  hashedPassword: string;
  isDeleted: boolean;
};
