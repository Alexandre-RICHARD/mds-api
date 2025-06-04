export {};

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      LOCAL_PORT: string;
      LOCAL_ADDRESS: string;
      CORS_ORIGIN: string;
      DB_SQLITE_PATH: string;
      JWT_SECRET_KEY: string;
    }
  }
}
