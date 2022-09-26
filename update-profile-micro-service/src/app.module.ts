import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileSchema } from './schemas/profile.schema';
import { getConfig } from './app-config';

@Module({
  imports: [
    MongooseModule.forRoot(getConfig().mongodb.url, { dbName: getConfig().mongodb.db }),
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }