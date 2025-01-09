import cors from "cors";
import dotenv from "dotenv";
import express, { type Express, type Request, type Response } from "express";

import { database, testDatabase } from "./database";
import { routerV1 } from "./v1/routerV1";

dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(" "),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
};

const app: Express = express();
// Using of cors for request origin handling and other request config
app.use(cors(corsOptions));
// Using json for request response
app.use(express.json());
// All endpoints starting with /vX will be handle by its linked router only
app.use("/v1", routerV1);

// Handle all remaining endpoint that does not match any routes
app.use((req: Request, res: Response): void => {
  res
    .status(404)
    .json(`Cette route (${req.originalUrl}) n'est pas gérée par le serveur.`);
});

const PORT = process.env.LOCAL_PORT;
export const start = () =>
  testDatabase().catch((error) => {
    throw new Error(JSON.stringify(error));
  });
app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Server works on http://localhost:${PORT}`);
});

// Close database connection when server disconnect
// eslint-disable-next-line @typescript-eslint/no-misused-promises
process.on("SIGINT", async () => {
  await database.close();
  // eslint-disable-next-line no-console
  console.log("Serveur arrêté et connexion à la base de données fermée.");
  process.exit(0);
});
