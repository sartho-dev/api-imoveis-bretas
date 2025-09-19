import { inject, injectable } from "tsyringe";
import { Imovel } from "../../../domain/entities/Imovel";
import { Area } from "../../../domain/value-objects/Area.vo";
import { Dinheiro } from "../../../domain/value-objects/Dinheiro.vo";
import { Endereco } from "../../../domain/value-objects/Endereco.vo";
import type { IImovelRepository } from "../../../infrastructure/database/typeorm/repositories/ImovelRepository/IImovelRepository";
import type { ICreateImovelDTO } from "../../dtos/Imovel/IImovel.dto";
import type { IUsuarioRepository } from "../../../infrastructure/database/typeorm/repositories/UsuarioRepository/IUsuarioRepository";



@injectable()
export class CreateImovelCase{
    
    constructor(
        @inject("ImovelRepository") 
        private imovelRepository: IImovelRepository,

        @inject("UsuarioRepository")
        private usuarioRepository: IUsuarioRepository
    )
    {}

    

    async execute(imovelObject:ICreateImovelDTO){

        const endereco = new Endereco(imovelObject.endereco.rua, imovelObject.endereco.numero,
             imovelObject.endereco.bairro, imovelObject.endereco.cidade, imovelObject.endereco.estado, imovelObject.endereco.cep,
            imovelObject.endereco.pais)
        
        const area = new Area(imovelObject.area.metrosQuadrados)

        const dinheiro = new Dinheiro(imovelObject.valor.valor)

        const usuario = await this.usuarioRepository.findById(imovelObject.usuarioId)
        
        if(!usuario){
            throw new Error("Usuario nao existe")
        }

        const imovel = new Imovel(imovelObject.tipo,
             endereco, area, imovelObject.quartos, imovelObject.banheiros, imovelObject.suites,
            imovelObject.vagas, dinheiro, imovelObject.situacao, 
            imovelObject.disponivel, usuario, imovelObject.andar)
        
        
        await this.imovelRepository.save(imovel)
    }
}