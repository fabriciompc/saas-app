import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { TenantService } from '../../services/tenant.service';
import { CreateTenantModel } from './../../shared/models/tenant/create-tenant.model';
import { UpdateTenantModel } from './../../shared/models/tenant/update-tenant.model';

@Controller()
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}
  @Get()
  getAll() {
    return this.tenantService.getAll();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.tenantService.getById(id);
  }

  @Post()
  async createPost(@Body() tenant: CreateTenantModel) {
    return this.tenantService.create(tenant);
  }

  @Put(':id')
  async replacePost(
    @Param('id') id: string,
    @Body() tenant: UpdateTenantModel,
  ) {
    return this.tenantService.update(id, tenant);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.tenantService.delete(id);
  }
}
