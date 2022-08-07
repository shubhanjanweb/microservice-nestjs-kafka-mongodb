import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { getConfig } from './app-config';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [getConfig().kafka.brokers],
        },
        consumer: {
          groupId: getConfig().kafka.groupId,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
