import { MigrationInterface, QueryRunner } from "typeorm";

export class NovaMigration1758305795230 implements MigrationInterface {
    name = 'NovaMigration1758305795230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`senha\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`imoveis\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tipo\` varchar(255) NOT NULL, \`rua\` varchar(255) NOT NULL, \`numero\` int NOT NULL, \`bairro\` varchar(255) NOT NULL, \`cidade\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`cep\` varchar(255) NOT NULL, \`pais\` varchar(255) NOT NULL, \`area\` float NOT NULL, \`quartos\` int NOT NULL, \`banheiros\` int NOT NULL, \`suites\` int NOT NULL, \`vagas\` int NOT NULL, \`andar\` int NULL, \`valor\` float NOT NULL, \`situacao\` varchar(255) NOT NULL, \`disponivel\` tinyint NOT NULL, \`usuarioId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`imoveis\` ADD CONSTRAINT \`FK_81f1f443ac822aedc31dfb9370d\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`imoveis\` DROP FOREIGN KEY \`FK_81f1f443ac822aedc31dfb9370d\``);
        await queryRunner.query(`DROP TABLE \`imoveis\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
    }

}
