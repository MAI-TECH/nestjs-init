import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('roles')
export class RoleModel {
    
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({ unique: true, nullable: false })
    name : string;

    @Column({ unique: true, nullable: false })
    code : string;

    @Column('text')
    description : string;

    @CreateDateColumn()
    created : Date;
}