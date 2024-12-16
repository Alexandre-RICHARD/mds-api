import type { Request, Response } from "express";

import { getUsersByRole } from "../query/users/getUsersByRole";

export const usersController = {
  getUsersByRole: async (req: Request, res: Response) => {
    const { role } = req.params;
    try {
      const results = await getUsersByRole(role);
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json(["server-error", error]);
    }
  },
};
