import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tenant } from '../domain/entities/tenant.entity';
import { Repository } from 'typeorm';
import { CreateTenantModel } from '../shared/models/tenant/create-tenant.model';
import { UpdateTenantModel } from '../shared/models/tenant/update-tenant.model';

@Injectable()
export class TenantService {
  constructor(
    @InjectRepository(Tenant)
    private readonly tenantRepository: Repository<Tenant>,
  ) {}

  async getAll() {
    return await this.tenantRepository.find();
  }

  async getById(id: string) {
    const tenant = this.tenantRepository.findOne(id);
    return tenant;
  }

  async create(createTenantModel: CreateTenantModel) {
    const tenant = this.tenantRepository.create(createTenantModel);
    await this.tenantRepository.save(tenant);
    return tenant;
  }

  async update(id: string, updateTenantModel: UpdateTenantModel) {
    await this.tenantRepository.update(id, updateTenantModel);
    const updatedTenant = await this.tenantRepository.findOne(id);
    if (updatedTenant) {
      return updatedTenant;
    }
    throw new HttpException('Empresa não Encontrada', HttpStatus.NOT_FOUND);
  }

  async delete(id: string) {
    const deleteTenant = await this.tenantRepository.delete(id);
    if (!deleteTenant.affected) {
      throw new HttpException('Empresa Não Encontrada', HttpStatus.NOT_FOUND);
    }
  }
}
