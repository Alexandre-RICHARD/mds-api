import type { Request, Response } from "express";
import { Router as createRouter } from "express";

import { asyncHandler } from "../../helpers/asyncHelper";
import { usersController } from "./controllers/usersController";

export const usersRouter = createRouter();

usersRouter.get("/test", asyncHandler(usersController.test));

/*
  Handle all remaining endpoint that does not match any routes
*/
usersRouter.use((_req: Request, res: Response): void => {
  res
    .status(404)
    .json(`Cette route (${_req.originalUrl}) n'est pas gérée par le serveur.`);
});
