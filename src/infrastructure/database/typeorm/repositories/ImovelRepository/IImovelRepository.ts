import { IFilterImovelDTO } from "../../../../../application/dtos/Imovel/IFilterImovel.dto";
import type { Imovel } from "../../../../../domain/entities/Imovel"


export interface IImovelRepository{
    save(imovel:Imovel): Promise<Imovel>
    findById(id:number): Promise<Imovel | null>
    findAll(): Promise<Imovel[]>;
    delete(id:number): Promise<void>;
    filter(filterDTO: IFilterImovelDTO): Promise<Imovel[]>;
}