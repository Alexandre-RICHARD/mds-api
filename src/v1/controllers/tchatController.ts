import type { Request, Response } from "express";

import { dabGetMoneyDistribution } from "../../helpers/dab.helper";
import { SocketService } from "../socketIo";
import type { SendMessageEndPointBody } from "../types/endpointBody/tchat/sendMessage.endpointBody.type";

const messages: string[] = [];

export const tchatController = {
  getMessages: async (_req: Request, res: Response) => {
    res.json({ messages });
  },

  sendMessage: async (req: Request, res: Response) => {
    const { message, socketId } = req.body as SendMessageEndPointBody;

    if (message.startsWith("/dab")) {
      if (socketId) {
        const messageSplited = message.split(" ");
        const value = parseFloat(messageSplited[messageSplited.length - 1]);
        const responseMessage = dabGetMoneyDistribution({
          price: value,
        });
        SocketService.getInstance().sendPrivateMessage(
          socketId,
          responseMessage,
        );
        res
          .status(200)
          .json({ success: true, message: "private message sent" });
        return;
      }
      res.status(400).json({ error: "missing Socket ID" });
      return;
    }

    if (!message) {
      res.status(400).json({ error: "Message vide" });
      return;
    }

    messages.push(message);
    SocketService.getInstance().emitMessage("newMessage", message);

    res.status(200).json({ success: true, message });
  },
};
