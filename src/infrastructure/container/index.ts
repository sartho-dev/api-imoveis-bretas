import { container } from "tsyringe";
import { AppDataSource } from "../database/data-source";
import { ImovelSchema } from "../database/typeorm/schema/Imovel.schema";
import { ImovelRepository } from "../database/typeorm/repositories/ImovelRepository/ImovelRepository";
import { CreateImovelCase } from "../../application/use-case/imovel-case/create-imovel.case";
import { FilterImovelCase } from "../../application/use-case/imovel-case/filter-imovel.case";
import { UsuarioSchema } from "../database/typeorm/schema/Usuario.schema";
import { UsuarioRepository } from "../database/typeorm/repositories/UsuarioRepository/UsuarioRepository";
import { CreateUsuarioCase } from "../../application/use-case/user-case/create-usuario.case";
import { LoginUsuarioCase } from "../../application/use-case/user-case/login-usuario.case";

export async function InicializaTudo() {

    try {
        await AppDataSource.initialize();

        console.log("Começou a conexão com o Banco")

        const ormRepoImovel = AppDataSource.getRepository(ImovelSchema)

        const ormRepoUsuario = AppDataSource.getRepository(UsuarioSchema)
        
        container.registerInstance("ImovelRepository", new ImovelRepository(ormRepoImovel))

        container.registerInstance("UsuarioRepository", new UsuarioRepository(ormRepoUsuario))
    
        container.register("CreateImovelCase", CreateImovelCase)

        container.register("CreateUsuarioCase", CreateUsuarioCase)
        
        container.register("FilterImovelCase", FilterImovelCase)

        container.register("LoginUsuarioCase", LoginUsuarioCase)

        console.log("Container Inicializado")
        
    } catch (error) {
        console.error("Erro ao Inicializar")
    }
    
}
    
    

