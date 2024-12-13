import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const database = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    },
    logging: false,
  },
);

export const testDatabase = async () => {
  try {
    await database.authenticate(); // Test d'authentification
    // eslint-disable-next-line no-console
    console.log("Connexion réussie à la base de données !");
  } catch (error) {
    throw new Error(
      `Erreur lors de la connexion à la base : ${JSON.stringify(error)}`,
    );
  }
};
