import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { League } from './league';
import { LeagueController } from './league.controller';
import { LeagueRepository } from './league.repository';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: League.name,
                schema: SchemaFactory.createForClass(League),
            }
        ]),
    ],
    providers:[
        LeagueRepository,
    ],
    controllers:[
        LeagueController,
    ]
})
export class LeagueModule {}
