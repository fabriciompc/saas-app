import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TenantTable1635276305955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'tenant',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'company',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
