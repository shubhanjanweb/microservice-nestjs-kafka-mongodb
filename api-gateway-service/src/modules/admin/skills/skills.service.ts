import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { getConfig } from '../../../app-config';

@Injectable()
export class SkillsService implements OnModuleInit {
  constructor(
    @Inject(getConfig().getSkills.name) private readonly getSkillsClient: ClientKafka,
  ) { }

  onModuleInit() {
    this.getSkillsClient.subscribeToResponseOf(getConfig().getSkills.kafkaTopic)
  }

  findAll(): Observable<any> {
    return this.getSkillsClient.send(
      getConfig().getSkills.kafkaTopic,
      'Send the list of skills'
    );
  }

}
