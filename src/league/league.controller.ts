import { Controller, Get } from "@nestjs/common";
import { LeagueRepository } from "./league.repository";

@Controller("leagues")
export class LeagueController {
    constructor(private readonly leagueRepo: LeagueRepository){}

    @Get()
    async fetchLeagues() {
        const leagues = await this.leagueRepo.find();
        return leagues;
    }
}