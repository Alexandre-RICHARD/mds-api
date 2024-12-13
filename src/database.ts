import { Sequelize } from "sequelize";

export const database = new Sequelize(
  "conception_sql",
  "sa",
  "au4uqbf11-C-J_pass",
  {
    host: "localhost",
    port: 1433,
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

(async () => {
  try {
    await database.authenticate(); // Test d'authentification
    console.log("Connexion réussie à la base de données !");
  } catch (error) {
    console.error("Erreur lors de la connexion à la base :", error);
  }
})();
