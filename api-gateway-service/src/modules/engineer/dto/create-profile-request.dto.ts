import { Type } from 'class-transformer';
import { MaxLength, IsNotEmpty, IsEmail, IsMobilePhone, Validate, IsString, MinLength, IsNumberString, IsAlpha, IsNumber, Max, Min, IsArray, Length, ValidateNested, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import * as _ from "lodash";

@ValidatorConstraint({ name: 'customText', async: false })
class CustomAssociateId implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return _.startsWith(text, 'CTS');
  }

  defaultMessage(args: ValidationArguments) {
    return 'AssociateId must start with "CTS"';
  }
}

export class Skill {

  @IsNotEmpty({ message: 'skillId is required' })
  readonly skillId: string;

  @Min(0, { message: 'expertiseLevel min value 0' })
  @Max(20, { message: 'expertiseLevel max value 20' })
  @IsNotEmpty({ message: 'expertiseLevel is required' })
  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 }, { message: 'expertiseLevel should be number' })
  readonly expertiseLevel: number;

}


export class CreateProfileRequestDto {

  @MinLength(5, { message: 'name min length 5' })
  @MaxLength(30, { message: 'name max length 30' })
  @IsString({ message: 'name not a string' })
  @IsNotEmpty({ message: 'name is required' })
  readonly name: string;

  @MinLength(5, { message: 'associateId min length 5' })
  @MaxLength(30, { message: 'associateId max length 30' })
  @IsNotEmpty({ message: 'associateId is required' })
  @Validate(CustomAssociateId)
  readonly associateId: string;

  @IsNotEmpty({ message: 'mobile is required' })
  @MinLength(10, { message: 'mobile no. min length 10' })
  @MaxLength(10, { message: 'mobile no. max length 10' })
  @IsNumberString({ message: 'mobile no. should be 10 digit number' })
  readonly mobile: string;

  @IsNotEmpty({ message: 'email is required' })
  @IsEmail({ message: 'email format is wrong' })
  readonly email: string;

  @IsArray({ message: 'skills list should be a list' })
  @IsNotEmpty({ message: 'skills list is required' })
  @ValidateNested({ each: true })
  @ArrayMinSize(1, { message: 'skills list should have atleast one item.' })
  @ArrayMaxSize(13, { message: 'skills list should have max 13 items.' })
  @Type(() => Skill)
  readonly skills: Skill[];

}




