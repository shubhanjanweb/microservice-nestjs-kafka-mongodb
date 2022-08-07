import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { updateProfile } from '../../../../app-config.json';
import { Observable } from 'rxjs';
import { CreateProfileRequestDto } from '../dto/create-profile-request.dto';


@Injectable()
export class UpdateProfileService implements OnModuleInit {

  constructor(
    @Inject(updateProfile.name) private readonly updateProfileClient: ClientKafka
  ) { }

  onModuleInit() {
    this.updateProfileClient.subscribeToResponseOf(updateProfile.kafkaTopic)
  }

  update(id: string, updateUpdateProfileDto: CreateProfileRequestDto): Observable<any> {
    return this.updateProfileClient.send(
      updateProfile.kafkaTopic,
      [{
        header: JSON.stringify(id),
        value: JSON.stringify(updateUpdateProfileDto)
      }]
    );
  }
}
