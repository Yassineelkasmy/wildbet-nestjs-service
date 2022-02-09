import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { Match } from './match';
import { MatchController } from './match.controller';
import { MatchRepository } from './match.repository';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Match.name,
                schema: SchemaFactory.createForClass(Match) 
            }
        ])
    ],
    providers:[
        MatchRepository
    ],
    controllers:[
        MatchController
    ],
    exports : [
        MatchRepository
    ]
})
export class MatchModule {}
