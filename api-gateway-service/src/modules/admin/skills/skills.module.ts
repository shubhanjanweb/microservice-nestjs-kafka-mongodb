import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getConfig } from '../../../app-config';

@Module({
  imports: [
    ClientsModule.register([{
      name: getConfig().getSkills.name,
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: getConfig().getSkills.clientId,
          brokers: [getConfig().kafka.brokers],
        },
        consumer: {
          groupId: getConfig().kafka.groupId,
        },
      },
    }])
  ],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule { }
