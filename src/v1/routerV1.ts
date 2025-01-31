import { Router as createRouter } from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { tchatRouter } from "./routers/tchat.router";
import { usersRouter } from "./routers/users.router";
import { viewsRouter } from "./routers/views.router";

const swaggerDocument = YAML.load("src/v1/docs/main.yaml") as Record<
  string,
  unknown
>;

swaggerDocument.servers = [
  {
    url: `${process.env.LOCAL_ADRESS}${process.env.LOCAL_PORT}`,
  },
];

export const routerV1 = createRouter();

routerV1.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routerV1.use("/tchat", tchatRouter);
routerV1.use("/users", usersRouter);
routerV1.use("/views", viewsRouter);
