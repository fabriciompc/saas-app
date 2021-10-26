import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Tenant } from '../../../domain/entities/tenant';

export class TenantMapper implements Tenant {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  company: string;
}
