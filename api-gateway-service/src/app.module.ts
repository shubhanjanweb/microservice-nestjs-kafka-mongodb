import { Module } from '@nestjs/common';
import { AdminModule } from './modules/admin/admin.module';
import { EngineerModule } from './modules/engineer/engineer.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    HealthModule,
    EngineerModule,
    AdminModule
  ]
})
export class AppModule { }
