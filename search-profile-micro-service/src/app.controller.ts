import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { getConfig } from './app-config';
import { ParseMessagePipe } from './message/parse-message.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern(getConfig().kafka.kafkaTopic)
  async handleProfileSearch(@Payload(new ParseMessagePipe()) message) {
    return this.appService.handleProfileSearch(message);
  }
}
