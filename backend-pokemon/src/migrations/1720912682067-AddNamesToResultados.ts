import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNamesToResultados1720912682067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE resultados ADD pokemon1Name varchar(255)`);
        await queryRunner.query(`ALTER TABLE resultados ADD pokemon2Name varchar(255)`);
        await queryRunner.query(`ALTER TABLE resultados ADD winnerName varchar(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE resultados DROP COLUMN pokemon1Name`);
        await queryRunner.query(`ALTER TABLE resultados DROP COLUMN pokemon2Name`);
        await queryRunner.query(`ALTER TABLE resultados DROP COLUMN winnerName`);
    }

}
