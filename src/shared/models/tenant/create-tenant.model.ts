import {MinLength} from 'class-validator'

export class CreateTenantModel {
  @MinLength(10 , {
    message: 'Nome da empresa é muito curto',
  })
  company: string;
}
