declare namespace NodeJS {
  interface ProcessEnv {
    DB_TYPE: string
    DB_HOST:string
    DB_PORT:number
    DB_USERNAME:string
    DB_PASSWORD:string
    DB_DATABASE:string
    JWT_SECRET: string;
  }
}
