import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { CreateProfileRequestDto } from '../dto/create-profile-request.dto';

@Controller('engineer/update-profile')
export class UpdateProfileController {
  constructor(private readonly updateProfileService: UpdateProfileService) { }

  @Put(':id')
  update(@Param('id') profileId: string, @Body() data: CreateProfileRequestDto) {
    console.log('profileId', profileId);
    console.log('data', data);
    return this.updateProfileService.update(profileId, data);
  }
}
