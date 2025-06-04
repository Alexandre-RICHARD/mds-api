import { vi } from "vitest";

vi.stubEnv("LOCAL_PORT", "3000");
vi.stubEnv("CORS_ORIGIN", "");
vi.stubEnv("DB_SQLITE_PATH", "./src/database.ts");
vi.stubEnv("JWT_SECRET_KEY", "RK9UC5TO3N85A10");
