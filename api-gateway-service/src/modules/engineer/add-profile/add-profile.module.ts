import { Module } from '@nestjs/common';
import { AddProfileService } from './add-profile.service';
import { AddProfileController } from './add-profile.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getConfig } from '../../../app-config';

@Module({
  imports: [
    ClientsModule.register([{
      name: getConfig().addProfile.name,
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: getConfig().addProfile.clientId,
          brokers: [getConfig().kafka.brokers],
        },
        consumer: {
          groupId: getConfig().addProfile.groupId,
        },
      },
    }])
  ],
  controllers: [AddProfileController],
  providers: [AddProfileService]
})
export class AddProfileModule { }
