import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDto } from './message/message.dto';
import { ProfileDocument } from './schemas/profile.schema';
import * as _ from 'lodash';
import { SkillDocument } from './schemas/skill.schema';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('Profile') private profileModel: Model<ProfileDocument>,
    @InjectModel('Skill') private skillModel: Model<SkillDocument>
  ) { }

  async handleProfileSearch(message: MessageDto) {
    let list = [];
    let ps = 0;
    let pn = 0;
    const param = message.value;
    let query: any = {};
    if (_.has(param, 'name')) {
      query.name = { $regex: param.name + '.*' };
    }
    if (_.has(param, 'associateId')) {
      query.associateId = { $regex: param.associateId + '.*' };
    }
    list = (await this.profileModel.find(query)).map(item => {
      const { _id, name, associateId, mobile, email, skills } = item;
      return {
        userId: item._id,
        name, associateId, mobile, email, skills
      }
    });
    const skillList = await this.skillModel.find();
    list.forEach(profile => {
      profile.skills = profile.skills.map(skill => {
        const sk = skillList.find(s => s.skillId === skill.skillId);
        return {
          skillName: sk.skillName,
          skillType: sk.skillType,
          expertiseLevel: skill.expertiseLevel
        };
      });
    });
    return {
      data: list,
      summary: {
        totalCount: list.length,
        pageSize: ps,
        pageCount: pn
      }
    }
  }
}
