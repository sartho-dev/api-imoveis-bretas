import { Router } from "express";
import { ImovelController } from "../controllers/imovel.controller";


const imovelRouter = Router()

imovelRouter.get("/", ImovelController.hello)
imovelRouter.post("/criar/imovel", ImovelController.create)
imovelRouter.get("/filtrar/imovel", ImovelController.filter)

export {imovelRouter}