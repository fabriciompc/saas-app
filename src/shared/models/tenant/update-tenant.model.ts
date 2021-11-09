import { MinLength } from 'class-validator';

export class UpdateTenantModel {
  @MinLength(10, {
    message: 'Nome da empresa é muito curto',
  })
  company: string;
}
