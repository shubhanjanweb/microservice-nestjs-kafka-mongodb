import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { getSkills } from '../../../../app-config.json';

@Injectable()
export class SkillsService implements OnModuleInit {
  constructor(
    @Inject(getSkills.name) private readonly getSkillsClient: ClientKafka,
  ) { }

  onModuleInit() {
    this.getSkillsClient.subscribeToResponseOf(getSkills.kafkaTopic)
  }

  findAll(): Observable<any> {
    return this.getSkillsClient.send(
      getSkills.kafkaTopic,
      'Send the list of skills'
    );
  }

}
