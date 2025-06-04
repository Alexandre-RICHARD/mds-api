import cors from "cors";
import dotenv from "dotenv";
import express, { type Express, type Request, type Response } from "express";
import { createServer } from "http";
import path from "path";

import { database, testDatabase } from "./database";
import { routerV1 } from "./v1/routerV1";
import { SocketService } from "./v1/socketIo";

dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(" "),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
};

// Create Express server
const app: Express = express();
// Using of cors for request origin handling and other request config
app.use(cors(corsOptions));
// Using json for request response
app.use(express.json());
// All endpoints starting with /vX will be handle by its linked router only
app.use("/v1", routerV1);

// Define EJS as render template
app.set("view engine", "ejs");

// Specify where are the views
app.set("views", path.join(process.cwd(), "src/views"));

// Handle all remaining endpoint that does not match any routes
app.use((req: Request, res: Response): void => {
  res
    .status(404)
    .json(`Cette route (${req.originalUrl}) n'est pas gérée par le serveur.`);
});

// Create server with http
const server = createServer(app);
// Connect socker.io to Express server
SocketService.getInstance().initialize(server);

const PORT = process.env.LOCAL_PORT;
export const start = async () => {
  await testDatabase();

  server.listen(PORT, (): void => {
    // eslint-disable-next-line no-console
    console.log(`Server works on ${process.env.LOCAL_ADRESS}${PORT}`);
  });

  // Close database connection when server disconnect
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  process.on("SIGINT", async () => {
    await database.close();
    // eslint-disable-next-line no-console
    console.log("Serveur arrêté et connexion à la base de données fermée.");
    process.exit(0);
  });
};
