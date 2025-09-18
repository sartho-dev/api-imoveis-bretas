import { inject, injectable } from "tsyringe";
import type { IImovelRepository } from "../../../infrastructure/database/typeorm/repositories/IImovelRepository";
import { IFilterImovelDTO } from "../../dtos/IFilterImovel.dto";

@injectable()
export class FilterImovelCase{

    constructor(
        @inject("ImovelRepository") private imovelRepository: IImovelRepository
    ){}

    async execute(filterDTO: IFilterImovelDTO){
        return await this.imovelRepository.filter(filterDTO);

    }
}