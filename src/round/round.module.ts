import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { Round } from './round';
import { RoundController } from './round.controller';
import { RoundRepository } from './round.repository';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:Round.name,
                schema:SchemaFactory.createForClass(Round),
            }
        ]),
    ],
    providers:[
        RoundRepository
    ],
    controllers:[
        RoundController
    ]
})
export class RoundModule {}
