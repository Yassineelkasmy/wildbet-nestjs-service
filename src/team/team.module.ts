import { Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { Team } from './team';
import { TeamController } from './team.controller';
import { TeamRepository } from './team.repository';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name:Team.name,
                schema: SchemaFactory.createForClass(Team),
            }
        ])
    ],
    providers: [
        TeamRepository,
    ],
    controllers:[
        TeamController,
    ]
})
export class TeamModule {}
