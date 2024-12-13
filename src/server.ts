import cors from "cors";
import dotenv from "dotenv";
import type { Express } from "express";
import express from "express";

import router from "./router";

dotenv.config();

const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(" "),
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  preflightContinue: false,
};

// Create app server with express
const app: Express = express();
// Using of cors for request origin handling and other request config
app.use(cors(corsOptions));
// Using json for request response
app.use(express.json());
app.use(router);

// Get port from .env file
const PORT = process.env.LOCAL_PORT;
// Export of starting function
export const start = () =>
  app.listen(PORT, (): void => {
    // eslint-disable-next-line no-console
    console.log(`Server works on http://localhost:${PORT}`);
  });
