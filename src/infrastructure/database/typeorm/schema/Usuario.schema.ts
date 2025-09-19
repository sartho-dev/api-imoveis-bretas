import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ImovelSchema } from "./Imovel.schema";


@Entity("usuario")
export class UsuarioSchema{
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email:string

    @Column()
    senha:string

    @OneToMany(() => ImovelSchema, (imovel) => imovel.usuario)
    imoveis: ImovelSchema[]
}