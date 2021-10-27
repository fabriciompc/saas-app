import { MigrationInterface, QueryRunner } from 'typeorm';

export class TenantTableCreatedAtColumn1635297447600
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE tenant ALTER COLUMN created_at TYPE timestamp(6)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
