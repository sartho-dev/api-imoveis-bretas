import { inject, injectable } from "tsyringe";
import  type { IUsuarioRepository } from "../../../infrastructure/database/typeorm/repositories/UsuarioRepository/IUsuarioRepository";
import { IUsuarioDTO } from "../../dtos/Usuario/IUsuario.dto";
import { Email } from "../../../domain/value-objects/Email.vo";
import { Usuario } from "../../../domain/entities/Usuario";


@injectable()
export class CreateUsuarioCase  {
    constructor(
        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    ){}

    async execute(usuarioObject: IUsuarioDTO){
        const email = new Email(usuarioObject.email)

        const usuario = new Usuario(email, usuarioObject.senha)

        await this.usuarioRepository.save(usuario)

    }
}