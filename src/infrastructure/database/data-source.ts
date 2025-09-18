import "reflect-metadata";
import { DataSource } from "typeorm";
import { ImovelSchema } from "./typeorm/schema/Imovel.schema";

// Cria o DataSource (conexão com o banco)
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",  
  port: 3306,
  username: "root",
  password: "novasenha",        
  database: "imovelbanco",  
  synchronize: false,        // cria as tabelas automaticamente (não use em produção)
  logging: false,
  entities: [ImovelSchema], // suas entidades TypeORM
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  subscribers: [],
});

// Inicialização (normalmente no bootstrap da app)
