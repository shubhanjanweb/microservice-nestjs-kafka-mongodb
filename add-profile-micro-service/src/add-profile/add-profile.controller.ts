import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AddProfileService } from './add-profile.service';
import { getConfig } from '../app-config';
import { ParseMessagePipe } from './message/parse-message.pipe';

@Controller()
export class AddProfileController {
  constructor(private readonly appService: AddProfileService) { }

  @MessagePattern(getConfig().kafka.kafkaTopic)
  async handleProfileCreated(@Payload(new ParseMessagePipe()) message) {
    return this.appService.handleProfileCreated(message);
  }
}
