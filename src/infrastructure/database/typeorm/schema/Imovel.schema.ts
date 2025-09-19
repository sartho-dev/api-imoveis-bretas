import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UsuarioSchema } from "./Usuario.schema";

@Entity("imoveis")
export class ImovelSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipo: string;

  // Endereço simples como colunas separadas
  @Column()
  rua: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  pais: string; // se quiser manter separado do país do imóvel

  // Área
  @Column("float")
  area: number;

  // Quartos, banheiros, suítes, vagas
  @Column()
  quartos: number;

  @Column()
  banheiros: number;

  @Column()
  suites: number;

  @Column()
  vagas: number;

  @Column({ nullable: true })
  andar: number;

  // Valor do imóvel (Dinheiro)
  @Column("float")
  valor: number;

  @Column()
  situacao: string;

  @Column()
  disponivel: boolean;

  @ManyToOne(() => UsuarioSchema, (usuario) => usuario.imoveis)
  usuario: UsuarioSchema
}
