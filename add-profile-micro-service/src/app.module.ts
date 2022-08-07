import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AddProfileModule } from './add-profile/add-profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true
    }),
    AddProfileModule
  ]
})
export class AppModule { }
