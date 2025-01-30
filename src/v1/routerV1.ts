import { Router as createRouter } from "express";

import { tchatRouter } from "./routers/tchat.router";
import { usersRouter } from "./routers/users.router";
import { viewsRouter } from "./routers/views.router";

export const routerV1 = createRouter();

routerV1.use("/tchat", tchatRouter);
routerV1.use("/users", usersRouter);
routerV1.use("/views", viewsRouter);
