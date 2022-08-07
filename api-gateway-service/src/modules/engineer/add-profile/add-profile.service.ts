import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { addProfile } from '../../../../app-config.json';


@Injectable()
export class AddProfileService implements OnModuleInit {

  constructor(
    @Inject(addProfile.name) private readonly addProfileClient: ClientKafka,
  ) { }

  onModuleInit() {
    this.addProfileClient.subscribeToResponseOf(addProfile.kafkaTopic)
  }

  create(message: any): Observable<any> {
    return this.addProfileClient.send(
      addProfile.kafkaTopic,
      [{ value: JSON.stringify(message) }]
    );
  }

}
