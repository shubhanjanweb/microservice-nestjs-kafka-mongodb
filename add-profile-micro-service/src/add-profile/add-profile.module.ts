import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddProfileController } from './add-profile.controller';
import { AddProfileService } from './add-profile.service';
import { ProfileSchema } from './schemas/profile.schema';
import { SkillSchema } from './schemas/skill.schema';
import { getConfig } from '../app-config';

@Module({
  imports: [
    MongooseModule.forRoot(getConfig().mongodb.url, { dbName: getConfig().mongodb.db }),
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
    MongooseModule.forFeature([{ name: 'Skill', schema: SkillSchema }]),
  ],
  controllers: [
    AddProfileController
  ],
  providers: [
    AddProfileService
  ]
})
export class AddProfileModule { }
