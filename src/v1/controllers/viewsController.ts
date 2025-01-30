import type { Request, Response } from "express";

export const viewsController = {
  renderSocketView: async (_req: Request, res: Response) => {
    res.render("socketIo", {
      adress: `${process.env.LOCAL_ADRESS}${process.env.LOCAL_PORT}`,
    });
  },
};
