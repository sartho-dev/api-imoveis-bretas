import { container } from "tsyringe";
import { AppDataSource } from "../database/data-source";
import { ImovelSchema } from "../database/typeorm/schema/Imovel.schema";
import { ImovelRepository } from "../database/typeorm/repositories/ImovelRepository";
import { CreateImovelCase } from "../../application/use-case/create-imovel/create-imovel.case";
import { FilterImovelCase } from "../../application/use-case/create-imovel/filter-imovel.case";

export async function InicializaTudo() {

    try {
        await AppDataSource.initialize();

        console.log("Começou a conexão com o Banco")

        const ormRepo = AppDataSource.getRepository(ImovelSchema)
    
        container.registerInstance("ImovelRepository", new ImovelRepository(ormRepo))
    
        container.register("CreateImovelCase", CreateImovelCase)
        
        container.register("FilterImovelCase", FilterImovelCase)

        console.log("Container Inicializado")
        
    } catch (error) {
        console.error("Erro ao Inicializar")
    }
    
}
    
    

