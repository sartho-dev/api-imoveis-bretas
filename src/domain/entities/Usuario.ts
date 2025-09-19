import { idText } from "typescript";
import { Email } from "../value-objects/Email.vo";
import { Imovel } from "./Imovel";

export class Usuario{
    public id?: number;
    public email: Email;
    public senha: string;
    public imoveis: Imovel[]

    constructor(email: Email, senha: string, id?:number){
        this.id = id
        this.email = email;
        this.senha = senha;
        this.imoveis = []
    }
}