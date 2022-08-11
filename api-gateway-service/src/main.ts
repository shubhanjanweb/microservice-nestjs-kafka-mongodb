import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConfig } from './app-config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix(getConfig().global.prefix);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
    defaultVersion: getConfig().global.defaultVersion
  });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('IIHT Skill Tracker Application API Gateway')
    .setDescription('The Backend API description')
    .setVersion(getConfig().global.defaultVersion)
    .addTag('iiht')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(getConfig().global.port);
}

bootstrap();
