import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);

  // whitelist: true hace que se eliminen las propiedades que no están definidas en el DTO
  // forbidNonWhitelisted: true hace que se lance un error si se recibe una propiedad que no está definida en el DTO
  // Se declara useGlobalPipes para que se aplique el pipe a todas las peticiones
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
main();
