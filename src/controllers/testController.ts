import type { Request, Response } from "express";

import { findAllUSers } from "../query/findAllUsers";

export const testController = {
  test: async (_req: Request, res: Response) => {
    try {
      const results = await findAllUSers();
      console.log(results);
      res.status(201).json(["error_save_successfully"]);
    } catch (error) {
      res.status(500).json(["server-error", error]);
    }
  },
};
