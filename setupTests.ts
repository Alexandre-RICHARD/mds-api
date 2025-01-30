import { vi } from "vitest";

vi.stubEnv("LOCAL_PORT", "3000");
vi.stubEnv("CORS_ORIGIN", "");
vi.stubEnv("DB_HOST", "localhost");
vi.stubEnv("DB_PORT", "1433");
vi.stubEnv("DB_USER", "toto");
vi.stubEnv("DB_PASSWORD", "toto");
vi.stubEnv("DB_DATABASE", "mds_api_database");
vi.stubEnv("JWT_SECRET_KEY", "RK9UC5TO3N85A10");
