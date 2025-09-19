import "reflect-metadata";
import { DataSource } from "typeorm";
import { ImovelSchema } from "./typeorm/schema/Imovel.schema";
import { UsuarioSchema } from "./typeorm/schema/Usuario.schema";

// Cria o DataSource (conexão com o banco)
export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,  
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,        
  database: process.env.DB_DATABASE,  
  synchronize: false,        // cria as tabelas automaticamente
  logging: false,
  entities: [ImovelSchema, UsuarioSchema], // entidades TypeORM
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  subscribers: [],
});


