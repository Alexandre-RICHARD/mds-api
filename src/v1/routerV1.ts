import { Router as createRouter } from "express";

import { usersRouter } from "./users/users.router";

export const routerV1 = createRouter();
routerV1.use(usersRouter);
