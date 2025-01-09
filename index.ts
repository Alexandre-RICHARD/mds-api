import { start } from "./src/server";

start().catch((error) => {
  console.error("Failed to launcher server : ", error);
});
