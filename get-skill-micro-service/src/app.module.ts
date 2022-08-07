import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getConfig } from './app-config';
import { SkillSchema } from './schemas/skill.schema';

@Module({
  imports: [
    MongooseModule.forRoot(getConfig().mongodb.url, { dbName: getConfig().mongodb.db }),
    MongooseModule.forFeature([{ name: 'Skill', schema: SkillSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
