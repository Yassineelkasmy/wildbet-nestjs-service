import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from 'src/environment';

@Module({
  imports: [MongooseModule.forRoot(
    `mongodb://${environment.mongodb_host}:${environment.mongodb_port}/${environment.mongodb_database}`
  ,),
],
})
export class DatabaseModule {}
