import type { Repository } from "typeorm";
import type { IImovelRepository } from "./IImovelRepository";
import { Imovel } from "../../../../../domain/entities/Imovel";
import type { ImovelSchema } from "../../schema/Imovel.schema";
import { Endereco } from "../../../../../domain/value-objects/Endereco.vo";
import { Dinheiro } from "../../../../../domain/value-objects/Dinheiro.vo";
import { Area } from "../../../../../domain/value-objects/Area.vo";
import { IFilterImovelDTO } from "../../../../../application/dtos/Imovel/IFilterImovel.dto";
import { Usuario } from "../../../../../domain/entities/Usuario";
import { Email } from "../../../../../domain/value-objects/Email.vo";
import { UsuarioSchema } from "../../schema/Usuario.schema";


export class ImovelRepository implements IImovelRepository{

    private ormRepository: Repository<ImovelSchema>

    constructor(ormRepository: Repository<ImovelSchema>){
        this.ormRepository = ormRepository
    }

    private toDomain(schema: ImovelSchema): Imovel{
        const endereco = new Endereco(schema.rua, schema.numero, schema.bairro, schema.cidade, 
            schema.estado, schema.cep, schema.pais)

        const area = new Area(schema.area)

        const valor = new Dinheiro(schema.valor)

        const usuario = new Usuario(new Email(schema.usuario.email), schema.usuario.senha)

        return new Imovel(schema.tipo, endereco, area, schema.quartos, 
            schema.banheiros,schema.suites, schema.vagas, valor, schema.situacao, schema.disponivel, 
            usuario, schema.andar, schema.id
        )

    }




    async save(imovel: Imovel): Promise<Imovel> {

        const usuarioEntity = await this.ormRepository.manager.findOne(UsuarioSchema, {
            where: { id: imovel.usuario.id }
         });

        if (!usuarioEntity) {
            throw new Error("Usuário não encontrado para associar ao imóvel");
        }


        const schema = this.ormRepository.create({
            
            tipo: imovel.tipo,
            rua: imovel.endereco.rua,
            numero: imovel.endereco.numero,
            bairro: imovel.endereco.bairro,
            cidade: imovel.endereco.cidade,
            estado: imovel.endereco.estado,
            cep: imovel.endereco.cep,
            pais: imovel.endereco.pais,
            area: imovel.area.metrosQuadrados,
            quartos: imovel.quartos,
            banheiros: imovel.banheiros,
            suites: imovel.suites,
            vagas: imovel.vagas,
            andar: imovel.andar,
            valor: imovel.valor.valor,
            situacao: imovel.situacao,
            disponivel: imovel.disponivel,
            usuario: usuarioEntity

        })

        const saved = await this.ormRepository.save(schema)
        return this.toDomain(saved)
    }

    async findById(id: number): Promise<Imovel | null> {
        const imovel =  await this.ormRepository.findOneBy({id})
        if(!imovel){
            return null
        }
        return this.toDomain(imovel)
    }

    async findAll(): Promise<Imovel[]> {
        const all_imovel = await this.ormRepository.find()

        return all_imovel.map((s) => this.toDomain(s))

    }

    async delete(id: number): Promise<void> {
        await this.ormRepository.delete(id)    
    }
    

    async filter(filterDTO:IFilterImovelDTO) : Promise<Imovel[]>{

       const query = this.ormRepository.createQueryBuilder("imoveis")

       if(filterDTO.situacao){
            query.andWhere("imoveis.situacao = :situacao",{situacao: filterDTO.situacao})
       }
       if(filterDTO.tipo){
            query.andWhere("imoveis.tipo = :tipo", {tipo: filterDTO.tipo})
       }
       if(filterDTO.estado){
            query.andWhere("imoveis.estado = :estado", {estado: filterDTO.estado})
       }
       if(filterDTO.cidade){
            query.andWhere("imoveis.cidade = :cidade", {cidade: filterDTO.cidade})
       }
       if(filterDTO.bairro){
            query.andWhere("imoveis.bairro = :bairro", {bairro: filterDTO.bairro})
       }
       if(filterDTO.valor?.apos != null && filterDTO.valor?.ate != null){
            query.andWhere("imoveis.valor BETWEEN :min and :max", {min: filterDTO.valor.apos, max: filterDTO.valor.ate})
       }
       if(filterDTO.quartos){
            query.andWhere("imoveis.quartos = :quartos", {quartos: filterDTO.quartos})
       }
       if(filterDTO.banheiros){
            query.andWhere("imoveis.banheiros = :banheiros", {banheiros: filterDTO.banheiros})
       }
       if(filterDTO.vagas){
            query.andWhere("imoveis.vagas = :vagas", {vagas: filterDTO.vagas})
       }
       
       const lista_imoveis = await query.getMany();

       return lista_imoveis.map((s) => this.toDomain(s))

    }
}