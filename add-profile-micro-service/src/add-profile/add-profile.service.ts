import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ProfileDocument } from './schemas/profile.schema';
import { SkillDocument } from './schemas/skill.schema';
import * as _ from 'lodash';

@Injectable()
export class AddProfileService {

  constructor(
    @InjectModel('Profile') private profileModel: Model<ProfileDocument>,
    @InjectModel('Skill') private skillModel: Model<SkillDocument>
  ) { }

  async handleProfileCreated(message: any) {
    const found = await this.profileModel.findOne({ associateId: message.value.associateId });
    if (found) {
      return this.handleError(`Associate ID ${message.value.associateId} already exists.`);
    }

    let skillIds = message.value.skills.map(s => s.skillId);
    if (_.uniq(skillIds).length === message.value.skills.length) {
      const skillList = await this.skillModel.find({ skillId: { $in: skillIds } });

      if (skillList.length === skillIds.length) {
        const newProfile = {
          createdAt: new Date(),
          ...message.value
        };
        newProfile.skills.forEach(sk => {
          const skill = skillList.find(item => item.skillId === sk.skillId);
          sk._id = skill._id;
        });
        const newProfileModel = await new this.profileModel(newProfile);
        try {
          await newProfileModel.save();
        } catch (err) {
          if (err.code === 11000) {
            return this.handleError(`Duplicate data found in ${Object.keys(err.keyPattern).toString()}`);
          }
          return this.handleError(`DB Error`);
        }
        return {
          data: null,
          summary: null,
          status: 'success',
          statusMessage: 'Profile has been successfully added.'
        }
      } else {
        return this.handleError('All the Skills are not valid.');
      }
    } else {
      return this.handleError('All the Skills are not unique.');
    }
  }

  handleError(msg: string) {
    console.error(`DB ERROR: ${msg}`);
    return {
      data: null,
      summary: null,
      status: 'error',
      statusMessage: msg
    }
  }

}
