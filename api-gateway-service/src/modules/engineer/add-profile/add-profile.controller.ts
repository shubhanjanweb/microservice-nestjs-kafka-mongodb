import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { AddProfileService } from './add-profile.service';
import { CreateProfileRequestDto } from '../dto/create-profile-request.dto';

@Controller('engineer/add-profile')
export class AddProfileController {
  constructor(private readonly addProfileService: AddProfileService) { }

  @Post()
  createProfile(@Body() createProfileRequest: CreateProfileRequestDto) {
    return this.addProfileService.create(createProfileRequest);
  }
}
