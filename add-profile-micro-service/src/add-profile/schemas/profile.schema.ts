import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export interface Skill {
  skill: { type: Types.ObjectId, ref: 'Skill' };
  expertiseLevel: number;
}

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop({ require: true })
  name: string;

  @Prop({ require: true, unique: true })
  associateId: string;

  @Prop({ require: true, unique: true })
  mobile: string;

  @Prop({ require: true, unique: true })
  email: string;

  @Prop({ require: true })
  skills: Skill[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);