import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleModel } from './role.entity';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';

@Module({
    imports: [TypeOrmModule.forFeature([RoleModel])],
    controllers: [ RoleController ],
    providers: [ RoleService]
})
export class RoleModule {}
