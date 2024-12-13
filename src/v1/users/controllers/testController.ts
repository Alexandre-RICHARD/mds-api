import type { Request, Response } from "express";

import { findAllUSers } from "../query/findAllUsers";

export const testController = {
  test: async (_req: Request, res: Response) => {
    try {
      const results = await findAllUSers();
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json(["server-error", error]);
    }
  },
};
