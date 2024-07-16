import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPokemonAResultados1720912682067 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('resultados', [
      new TableColumn({
        name: 'pokemon1Name',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'pokemon2Name',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'winnerName',
        type: 'varchar',
        isNullable: true,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('resultados', 'pokemon1Name');
    await queryRunner.dropColumn('resultados', 'pokemon2Name');
    await queryRunner.dropColumn('resultados', 'winnerName');
  }
}