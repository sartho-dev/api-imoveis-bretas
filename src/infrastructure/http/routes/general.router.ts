import { Router } from "express";
import { ImovelController } from "../controllers/imovel.controller";
import { UsuarioController } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";


const imovelRouter = Router()

//Cliente
imovelRouter.get("/", ImovelController.hello)

imovelRouter.get("/filtrar/imovel", ImovelController.filter)

//Admin

imovelRouter.post("/criar/usuario", UsuarioController.create)

imovelRouter.post("/login/usuario", UsuarioController.login)

imovelRouter.post("/criar/imovel", authMiddleware, ImovelController.create)



export {imovelRouter}