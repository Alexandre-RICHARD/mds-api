import { Router as createRouter } from "express";

import { asyncHandler } from "../../middlewares/asyncRequestHandler";
import { asyncSecurityHandler } from "../../middlewares/asyncSecurityHandler";
import { usersController } from "../controllers/usersController";

export const tchatRouter = createRouter();

tchatRouter.get(
  "/users/:role",
  asyncSecurityHandler(usersController.getUsersByRole),
);
tchatRouter.post("/users/login", asyncHandler(usersController.login));
