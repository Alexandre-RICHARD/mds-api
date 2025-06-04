import { start } from "./src/server";

start().catch((error) => {
  console.error("Failed to launch server : ", error);
});
