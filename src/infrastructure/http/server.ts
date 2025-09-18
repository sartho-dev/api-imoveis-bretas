import express from "express";
import { imovelRouter } from "./routes/imovel.router";
import { InicializaTudo } from "../container";


const app = express();

app.use(express.json());

async function bootstrap() {
  await InicializaTudo()
  app.use(imovelRouter)
}

bootstrap()

export { app };
