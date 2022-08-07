import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Skill {
  skillCode: string;
  expertiseLevel: number;
}

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {
  @Prop()
  name: string;

  @Prop()
  associateId: string;

  @Prop()
  mobile: string;

  @Prop()
  email: string;

  @Prop()
  skills: Skill[];
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);