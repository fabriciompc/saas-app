import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class TenantTable1635276305955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      'CREATE TABLE tenant (id uuid DEFAULT uuid_generate_v4 (),company VARCHAR NOT NULL,created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(6),      PRIMARY KEY (id)    );',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
