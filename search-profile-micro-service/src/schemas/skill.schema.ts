import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SkillDocument = Skill & Document;

@Schema()
export class Skill {
  @Prop({ require: true })
  skillId: string;

  @Prop({ require: true, unique: true })
  skillName: string;

  @Prop({ require: true, unique: true })
  skillType: string;

}

export const SkillSchema = SchemaFactory.createForClass(Skill);