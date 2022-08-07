import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { getConfig } from '../../../app-config';

@Injectable()
export class SearchProfileService implements OnModuleInit {
  constructor(
    @Inject(getConfig().searchProfile.name) private readonly searchProfileClient: ClientKafka,
  ) { }

  onModuleInit() {
    this.searchProfileClient.subscribeToResponseOf(getConfig().searchProfile.kafkaTopic)
  }

  findAll(message: any): Observable<any> {
    return this.searchProfileClient.send(
      getConfig().searchProfile.kafkaTopic,
      [{ value: JSON.stringify(message) }]
    );
  }


}
