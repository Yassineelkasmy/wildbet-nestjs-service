import { Controller, Get, Param } from "@nestjs/common";
import { LeagueRepository } from "./league.repository";

@Controller("leagues")
export class LeagueController {
    constructor(private readonly leagueRepo: LeagueRepository){}

    @Get()
    async fetchLeagues() {
        const leagues = await this.leagueRepo.find();
        return leagues;
    }

    @Get(':id')
    async fetchLeague(@Param('id') id: number) {
        const league = await this.leagueRepo.findOne({league_id:id});
        return league;
    }
}