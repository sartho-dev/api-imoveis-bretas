import { inject, injectable } from "tsyringe";
import type { IImovelRepository } from "../../../infrastructure/database/typeorm/repositories/ImovelRepository/IImovelRepository";
import { IFilterImovelDTO } from "../../dtos/Imovel/IFilterImovel.dto";

@injectable()
export class FilterImovelCase{

    constructor(
        @inject("ImovelRepository") private imovelRepository: IImovelRepository
    ){}

    async execute(filterDTO: IFilterImovelDTO){
        return await this.imovelRepository.filter(filterDTO);

    }
}