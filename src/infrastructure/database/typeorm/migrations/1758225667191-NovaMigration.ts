import { MigrationInterface, QueryRunner } from "typeorm";

export class NovaMigration1758225667191 implements MigrationInterface {
    name = 'NovaMigration1758225667191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`imoveis\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` varchar(255) NOT NULL, \`rua\` varchar(255) NOT NULL, \`numero\` int NOT NULL, \`bairro\` varchar(255) NOT NULL, \`cidade\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`pais\` varchar(255) NOT NULL, \`area\` float NOT NULL, \`quartos\` int NOT NULL, \`banheiros\` int NOT NULL, \`suites\` int NOT NULL, \`vagas\` int NOT NULL, \`andar\` int NULL, \`valor\` float NOT NULL, \`situacao\` varchar(255) NOT NULL, \`disponivel\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`imoveis\``);
    }

}
