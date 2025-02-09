import { Router as createRouter } from "express";

import { asyncHandler } from "../../middlewares/asyncRequestHandler";
import { asyncSecurityHandler } from "../../middlewares/asyncSecurityHandler";
import { usersController } from "../controllers/usersController";

export const usersRouter = createRouter();

usersRouter.get(
  "/role/:role",
  asyncSecurityHandler(usersController.getUsersByRole),
);
usersRouter.post("/login", asyncHandler(usersController.login));
