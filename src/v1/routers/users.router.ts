import { Router as createRouter } from "express";

import { asyncHandler } from "../../middlewares/asyncRequestHandler";
import { asyncSecurityHandler } from "../../middlewares/asyncSecurityHandler";
import { usersController } from "../controllers/usersController";

export const usersRouter = createRouter();

usersRouter.get(
  "/users/:role",
  asyncSecurityHandler(usersController.getUsersByRole),
);
usersRouter.post("/users/login", asyncHandler(usersController.login));
