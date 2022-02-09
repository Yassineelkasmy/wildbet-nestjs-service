/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueModule } from './league/league.module';
import { TeamModule } from './team/team.module';
import { MatchModule } from './match/match.module';
import { RoundModule } from './round/round.module';
import { DatabaseModule } from './database/database.module';
import { Web3Module } from './web3/web3.module';

@Module({
  imports: [LeagueModule, TeamModule, MatchModule, RoundModule, DatabaseModule, Web3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
