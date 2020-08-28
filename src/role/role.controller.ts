import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { RoleModel } from './role.entity'; 
import { RoleService } from './role.service';

@Controller('roles')
export class RoleController {

    constructor(
        private readonly roleService: RoleService
    ) {}

    @Get()
    findAll() : Promise<RoleModel[]> {
        //const roleDtos: RoleDto[] = [];
        return this.roleService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) : Promise<RoleModel> {
        return this.roleService.findOne(id);
    }

    @Post('create')
    async create(@Body() roleData: RoleModel) : Promise<any>  {
        return this.roleService.create(roleData);
    }

    @Put(':id')
    async update(@Param('id') id: string, roleData: RoleModel) : Promise<any>  {
        //roleData.id = Number(id);
        console.log('Update #' + roleData.id);
        return this.roleService.update(roleData);
    }

    @Delete(':id')
    async deleteById(@Param('id') id: string) : Promise<any> {
        return this.roleService.delete(id);
    }
}