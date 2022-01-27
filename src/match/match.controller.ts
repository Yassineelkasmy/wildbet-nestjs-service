import { Controller, Get, Param } from "@nestjs/common";
import { MatchRepository } from "./match.repository";

@Controller('matchs')
export class MatchController {
    constructor(private readonly matchRepo:MatchRepository){}

    @Get()
    async fetchMatches() {
        const matches = await this.matchRepo.find();
        return matches;
    }

    @Get('round/:id')
    async fetchMatchByRound(@Param('id') id:number) {
        const round = {round_id:id};
        const matches = await this.matchRepo.find({round});

        return matches;
    }
}