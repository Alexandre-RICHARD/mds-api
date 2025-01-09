export type CreateUser = {
  role: string;
  registeredAt: string;
  lastname: string;
  firstname: string;
  mail: string;
  hashedPassword: string;
  adressCountry: string;
  adressRegionCode: string;
  adressCity: string;
  adressLocation: string;
  adressPrecision: string;
  isDeleted: 0 | 1;
};
