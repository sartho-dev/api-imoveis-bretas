import { inject, injectable } from "tsyringe";
import { Imovel } from "../../../domain/entities/Imovel";
import { Area } from "../../../domain/value-objects/Area.vo";
import { Dinheiro } from "../../../domain/value-objects/Dinheiro.vo";
import { Endereco } from "../../../domain/value-objects/Endereco.vo";
import type { IImovelRepository } from "../../../infrastructure/database/typeorm/repositories/IImovelRepository";
import type { ICreateImovelDTO } from "../../dtos/imovel.dto";


@injectable()
export class CreateImovelCase{
    
    constructor(
        @inject("ImovelRepository") 
        private imovelRepository: IImovelRepository)
    {}


    async execute(imovelObject:ICreateImovelDTO){

        const endereco = new Endereco(imovelObject.endereco.rua, imovelObject.endereco.numero,
             imovelObject.endereco.bairro, imovelObject.endereco.cidade, imovelObject.endereco.estado, imovelObject.endereco.cep,
            imovelObject.endereco.pais)
        
        const area = new Area(imovelObject.area.metrosQuadrados)

        const dinheiro = new Dinheiro(imovelObject.valor.valor)

        const imovel = new Imovel(imovelObject.tipo,
             endereco, area, imovelObject.quartos, imovelObject.banheiros, imovelObject.suites,
            imovelObject.vagas, dinheiro, imovelObject.situacao, 
            imovelObject.disponivel, imovelObject.andar)

        
        
        await this.imovelRepository.save(imovel)
    }
}