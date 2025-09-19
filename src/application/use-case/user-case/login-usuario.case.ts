import { inject, injectable } from "tsyringe";
import type { IUsuarioRepository } from "../../../infrastructure/database/typeorm/repositories/UsuarioRepository/IUsuarioRepository";
import { ILoginDTO } from "../../dtos/Usuario/ILogin.dto";
import jwt from "jsonwebtoken"

@injectable()
export class LoginUsuarioCase{
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(usuarioObject: ILoginDTO){
        const usuario = await this.usuarioRepository.findByEmail(usuarioObject.email)

        if(!usuario || usuario.senha !== usuarioObject.senha){
            throw new Error("Email ou senha invalidos")
        }

        const token = jwt.sign({id: usuario.id}, process.env.JWT_SECRET, {expiresIn: "8h"})

        return token
    }
}