import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { searchProfile } from '../../../../app-config.json';

@Injectable()
export class SearchProfileService implements OnModuleInit {
  constructor(
    @Inject(searchProfile.name) private readonly searchProfileClient: ClientKafka,
  ) { }

  onModuleInit() {
    this.searchProfileClient.subscribeToResponseOf(searchProfile.kafkaTopic)
  }

  findAll(message: any): Observable<any> {
    return this.searchProfileClient.send(
      searchProfile.kafkaTopic,
      [{ value: JSON.stringify(message) }]
    );
  }


}
