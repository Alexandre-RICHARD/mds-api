import { Router as createRouter } from "express";

import { usersRouter } from "./routers/users.router";

export const routerV1 = createRouter();
routerV1.use(usersRouter);
