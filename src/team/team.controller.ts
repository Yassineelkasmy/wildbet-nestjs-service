import { Controller, Get, Param } from "@nestjs/common";
import { TeamRepository } from "./team.repository";

@Controller('teams')
export class TeamController {
    constructor(private readonly teamRepo: TeamRepository){}
    @Get()
    async fetchTeams() {
        const leagues = await this.teamRepo.find();
        return leagues;
    }

    @Get(':id')
    async fetchTeam(@Param('id') id: number) {
        const league = await this.teamRepo.findOne({team_id:id});
        return league;
    }
}
