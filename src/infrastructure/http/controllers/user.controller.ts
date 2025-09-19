import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUsuarioCase } from "../../../application/use-case/user-case/create-usuario.case";

import { LoginUsuarioCase } from "../../../application/use-case/user-case/login-usuario.case";

export const UsuarioController = {
    async create(req:Request, res: Response){

        try {
            
            const createUsuarioCase = container.resolve(CreateUsuarioCase)
    
            //deve seguir IUsuarioDTO
            const usuarioDto = req.body
    
            await createUsuarioCase.execute(usuarioDto)
    
            res.status(201).json({
                Message: "Usuario criado com sucesso"
            })


        } catch (error) {
            console.error(error)
            res.status(500).json({
                Message: "Erro: Usuario não criado"
            })
        }

    },

    async login(req:Request, res:Response){

        try {
            const loginUsuarioCase = container.resolve<LoginUsuarioCase>("LoginUsuarioCase")

            const loginDto = req.body 

            const token = await loginUsuarioCase.execute(loginDto)
        

            res.json({
                Token: token
            })

        } catch (error) {
            res.status(500).json({
                Message: "Erro ao fazer login"
            })
        }

    }
}