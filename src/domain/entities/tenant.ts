import { Entity } from 'typeorm';

@Entity()
export class Tenant {
  id: string;
  company: string;
}
