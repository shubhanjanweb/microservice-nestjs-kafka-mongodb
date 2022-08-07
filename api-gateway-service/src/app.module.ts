import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { EngineerModule } from './modules/engineer/engineer.module';

@Module({
  imports: [
    EngineerModule,
    AdminModule
  ]
})
export class AppModule { }
