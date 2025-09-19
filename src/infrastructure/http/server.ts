import express from "express";
import { imovelRouter } from "./routes/general.router";
import { InicializaTudo } from "../container";
import "dotenv/config";

const app = express();

app.use(express.json());

async function bootstrap() {
  await InicializaTudo()
  app.use(imovelRouter)
}

bootstrap()

export { app };
