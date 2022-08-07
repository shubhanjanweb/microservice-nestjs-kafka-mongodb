import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as _ from 'lodash';
import { SkillDocument } from './schemas/skill.schema';

@Injectable()
export class AppService {

  constructor(
    @InjectModel('Skill') private skillModel: Model<SkillDocument>
  ) { }

  async getSkillList() {
    let list = [];

    list = (await this.skillModel.find()).map(item => {
      const { skillId, skillName } = item;
      return {
        skillId,
        skillName
      }
    });
    return {
      data: list,
      summary: {
        totalCount: list.length
      }
    }
  }
}
