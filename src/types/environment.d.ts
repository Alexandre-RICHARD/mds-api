export {};

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface ProcessEnv {
      LOCAL_PORT: number;
      LOCAL_ADRESS: string;
      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_DATABASE: string;
      JWT_SECRET_KEY: string;
    }
  }
}
