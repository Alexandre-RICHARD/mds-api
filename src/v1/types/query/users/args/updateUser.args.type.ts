export type UpdateUserArgs = {
  user: unknown;
  role: string;
  registeredAt: Date;
  lastname: string;
  firstname: string;
  mail: string;
  hashedPassword: string;
  adressCountry: string;
  adressRegionCode: string;
  adressCity: string;
  adressLocation: string;
  adressPrecision: string;
  isDeleted: boolean;
};
