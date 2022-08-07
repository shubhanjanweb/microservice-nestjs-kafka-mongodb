import { Module } from '@nestjs/common';
import { AddProfileModule } from './add-profile/add-profile.module';
import { UpdateProfileModule } from './update-profile/update-profile.module';

@Module({
  imports: [
    AddProfileModule,
    UpdateProfileModule
  ]
})
export class EngineerModule { }
