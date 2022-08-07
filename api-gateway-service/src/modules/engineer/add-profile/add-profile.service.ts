import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { getConfig } from '../../../app-config';


@Injectable()
export class AddProfileService implements OnModuleInit {

  constructor(
    @Inject(getConfig().addProfile.name) private readonly addProfileClient: ClientKafka,
  ) { }

  onModuleInit() {
    this.addProfileClient.subscribeToResponseOf(getConfig().addProfile.kafkaTopic)
  }

  create(message: any): Observable<any> {
    return this.addProfileClient.send(
      getConfig().addProfile.kafkaTopic,
      [{ value: JSON.stringify(message) }]
    );
  }

}
