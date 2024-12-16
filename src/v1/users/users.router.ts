import { Router as createRouter } from "express";

import { asyncHandler } from "../../helpers/asyncHelper";
import { usersController } from "./controllers/usersController";

export const usersRouter = createRouter();

usersRouter.get("/users/:role", asyncHandler(usersController.getUsersByRole));
