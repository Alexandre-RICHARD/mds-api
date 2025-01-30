import { Router as createRouter } from "express";

import { asyncHandler } from "../../middlewares/asyncRequestHandler";
import { viewsController } from "../controllers/viewsController";

export const viewsRouter = createRouter();

viewsRouter.get("/tchat", asyncHandler(viewsController.renderSocketView));
