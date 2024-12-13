import type { Request, Response } from "express";
import { Router as createRouter } from "express";

import { testController } from "./users/controllers/testController";

const router = createRouter();

router.get("/test", testController.test);

/*
  Handle all remaining endpoint that does not match any routes
*/
router.use((_req: Request, res: Response): void => {
  res
    .status(404)
    .json(`Cette route (${_req.originalUrl}) n'est pas gérée par le serveur.`);
});

export default router;
