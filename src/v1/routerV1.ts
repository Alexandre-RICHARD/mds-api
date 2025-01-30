import { Router as createRouter } from "express";

import { usersRouter } from "./routers/users.router";
import { viewsRouter } from "./routers/views.router";

export const routerV1 = createRouter();

routerV1.use(usersRouter);
routerV1.use(viewsRouter);
