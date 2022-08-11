import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { AddProfileService } from './add-profile.service';
import { CreateProfileRequestDto } from '../dto/create-profile-request.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('engineer/add-profile')
export class AddProfileController {
  constructor(private readonly addProfileService: AddProfileService) { }

  @Post()
  @ApiBody({ type: [CreateProfileRequestDto] })
  createProfile(@Body() createProfileRequest: CreateProfileRequestDto) {
    return this.addProfileService.create(createProfileRequest);
  }
}
