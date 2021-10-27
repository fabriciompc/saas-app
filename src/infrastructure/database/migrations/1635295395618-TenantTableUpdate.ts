import { MigrationInterface, QueryRunner } from 'typeorm';

export class TenantTableUpdate1635295395618 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "tenant" ADD COLUMN "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP(6)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
