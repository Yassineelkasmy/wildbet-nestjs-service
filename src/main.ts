import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from './environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `http://${environment.cors_origin_host}:${environment.cors_origin_port}`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
   
  });
  await app.listen(environment.server_port);
}
bootstrap();
