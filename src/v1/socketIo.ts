import type { Server as HttpServer } from "http";
import type { Socket } from "socket.io";
import { Server as SocketIOServer } from "socket.io";

export class SocketService {
  private static instance: SocketService;
  private io: SocketIOServer | null = null;

  // Get unique instance of io
  public static getInstance(): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService();
    }
    return SocketService.instance;
  }

  // Init socket io
  public initialize(server: HttpServer) {
    this.io = new SocketIOServer(server, {
      cors: {
        origin: "*",
      },
    });

    this.io.on("connection", (socket: Socket) => {
      console.log("🟢 Un utilisateur est connecté");

      socket.on("disconnect", () => {
        console.log("🔴 Un utilisateur s'est déconnecté");
      });
    });
  }

  // Method to emit message to all clients
  public emitMessage(event: string, data: unknown) {
    if (this.io) {
      this.io.emit(event, data);
    } else {
      console.warn("⚠️ Socket.IO n'est pas initialisé !");
    }
  }
}

export default SocketService.getInstance();
