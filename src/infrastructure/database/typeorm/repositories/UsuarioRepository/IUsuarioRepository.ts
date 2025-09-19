import { Usuario } from "../../../../../domain/entities/Usuario"

export interface IUsuarioRepository{
    save(usuario:Usuario): Promise<Usuario>;
    
    findById(id:number): Promise<Usuario | null>;
    findByEmail(email:string): Promise<Usuario | null>;

    
}