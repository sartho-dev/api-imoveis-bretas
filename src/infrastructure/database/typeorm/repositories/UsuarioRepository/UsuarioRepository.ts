import { Repository } from "typeorm";
import  {IUsuarioRepository}  from "./IUsuarioRepository";
import { UsuarioSchema } from "../../schema/Usuario.schema";
import { Usuario } from "../../../../../domain/entities/Usuario";
import { Email } from "../../../../../domain/value-objects/Email.vo";


export class UsuarioRepository implements IUsuarioRepository{
    private ormRepository: Repository<UsuarioSchema>

    constructor(ormRepository: Repository<UsuarioSchema>){
        this.ormRepository = ormRepository

    }

    private toDomain(schema:UsuarioSchema): Usuario{

        const email = new Email(schema.email)

        const usuario = new Usuario(email, schema.senha)

        return usuario
    }

    async save(usuario: Usuario): Promise<Usuario> {

        const schema = await this.ormRepository.create({
            email: usuario.email.value,
            senha: usuario.senha
        })

        const saved = await this.ormRepository.save(schema)

        return this.toDomain(saved)
    }

    async findById(id: number): Promise<Usuario | null> {
        const usuario = await this.ormRepository.findOneBy({id})

        if(!usuario){
            throw new Error("Usuario não encontrado")
        }

        return this.toDomain(usuario)
    }

    async findByEmail(email: string): Promise<Usuario | null> {
        const usuario = await this.ormRepository.findOneBy({email})

        
        if(!usuario){
            throw new Error("Usuario não encontrado pelo email")

        }
        return this.toDomain(usuario)
    }
}