import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { getConfig } from './app-config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern(getConfig().kafka.kafkaTopic)
  async getSkillList() {
    return this.appService.getSkillList();
  }
}
