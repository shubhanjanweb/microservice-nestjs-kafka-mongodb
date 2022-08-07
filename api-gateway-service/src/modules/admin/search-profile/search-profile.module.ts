import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { getConfig } from '../../../app-config';
import { SearchProfileController } from './search-profile.controller';
import { SearchProfileService } from './search-profile.service';

@Module({
  imports: [
    ClientsModule.register([{
      name: getConfig().searchProfile.name,
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: getConfig().searchProfile.clientId,
          brokers: [getConfig().kafka.brokers],
        },
        consumer: {
          groupId: getConfig().searchProfile.groupId,
        },
      },
    }])
  ],
  controllers: [SearchProfileController],
  providers: [SearchProfileService]
})
export class SearchProfileModule { }
