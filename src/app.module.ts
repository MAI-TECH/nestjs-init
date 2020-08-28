import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
