import type { Request, Response } from "express";
import { Router as createRouter } from "express";

import { testController } from "./controllers/testController";

// import { errorController } from "./controllers/errorController";

const router = createRouter();

// Here will be all our routes
router.get("/test", testController.test);

// Handling all other route unassigned to a controller method
router.use((_req: Request, res: Response): void => {
  res
    .status(404)
    .json(`Cette route (${_req.originalUrl}) n'est pas gérée par le serveur.`);
});

export default router;
