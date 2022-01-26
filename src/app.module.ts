import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueModule } from './league/league.module';
import { TeamModule } from './team/team.module';
import { MatchModule } from './match/match.module';
import { RoundModule } from './round/round.module';
import { SeasonModule } from './season/season.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LeagueModule, TeamModule, MatchModule, RoundModule, SeasonModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
