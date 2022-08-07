import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { getConfig } from '../../../app-config';
import { Observable } from 'rxjs';
import { CreateProfileRequestDto } from '../dto/create-profile-request.dto';


@Injectable()
export class UpdateProfileService implements OnModuleInit {

  constructor(
    @Inject(getConfig().updateProfile.name) private readonly updateProfileClient: ClientKafka
  ) { }

  onModuleInit() {
    this.updateProfileClient.subscribeToResponseOf(getConfig().updateProfile.kafkaTopic)
  }

  update(id: string, updateUpdateProfileDto: CreateProfileRequestDto): Observable<any> {
    return this.updateProfileClient.send(
      getConfig().updateProfile.kafkaTopic,
      [{
        header: JSON.stringify(id),
        value: JSON.stringify(updateUpdateProfileDto)
      }]
    );
  }
}
