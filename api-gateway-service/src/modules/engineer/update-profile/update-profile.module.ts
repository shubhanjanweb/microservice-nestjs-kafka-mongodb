import { Module } from '@nestjs/common';
import { UpdateProfileService } from './update-profile.service';
import { UpdateProfileController } from './update-profile.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getConfig } from '../../../app-config';

@Module({
  imports: [
    ClientsModule.register([{
      name: getConfig().updateProfile.name,
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: getConfig().updateProfile.clientId,
          brokers: [getConfig().kafka.brokers],
        },
        consumer: {
          groupId: getConfig().updateProfile.groupId,
        },
      },
    }])
  ],
  controllers: [UpdateProfileController],
  providers: [UpdateProfileService]
})
export class UpdateProfileModule { }
