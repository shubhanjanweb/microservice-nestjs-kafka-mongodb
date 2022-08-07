import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDto } from './message/message.dto';
import { ProfileDocument } from './schemas/profile.schema';

@Injectable()
export class AppService {

  constructor(@InjectModel('Profile') private profileModel: Model<ProfileDocument>) { }

  async handleProfileUpdated(message: MessageDto) {
    const existingProfile = await this.profileModel.findById(message.header);
    if (!existingProfile) {
      throw new NotFoundException(`Profile #${message.header} not found`);
    }
    Object.assign(existingProfile, message.value);
    await existingProfile.save();
    return existingProfile;
  }
}
