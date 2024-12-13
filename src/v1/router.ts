import type { Request, Response } from "express";
import { Router as createRouter } from "express";

import { asyncHandler } from "../helpers/asyncHelper";
import { testController } from "./users/controllers/testController";

export const routerV1 = createRouter();

routerV1.get("/test", asyncHandler(testController.test));

/*
  Handle all remaining endpoint that does not match any routes
*/
routerV1.use((_req: Request, res: Response): void => {
  res
    .status(404)
    .json(`Cette route (${_req.originalUrl}) n'est pas gérée par le serveur.`);
});
