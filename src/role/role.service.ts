import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { RoleModel } from './role.entity';

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(RoleModel)
        private readonly roleRepository: Repository<RoleModel>,
    ) {}

    async findAll(): Promise<RoleModel[]> {
        return await this.roleRepository.find();
    }

    async findOne(id: string): Promise<RoleModel> {
        return await this.roleRepository.findOne({ where: { id } });
    }

    async create(roleModel: RoleModel): Promise<RoleModel> {
        return await this.roleRepository.save(roleModel);
    }

    async update(roleModel: RoleModel): Promise<UpdateResult> {
        return await this.roleRepository.update(roleModel.id, roleModel);
    }

    async delete(id: string): Promise<DeleteResult> {
        return await this.roleRepository.delete(id);
    }
}