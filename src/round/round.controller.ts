import { Controller, Get, Param } from "@nestjs/common";
import { RoundRepository } from "./round.repository";

@Controller('rounds')
export class RoundController{
    constructor(private readonly roundRepo: RoundRepository){}
    @Get()
    async fetchRounds() {
        const leagues = await this.roundRepo.find();
        return leagues;
    }

    @Get(':id')
    async fetchRound(@Param('id') id: number) {
        const league = await this.roundRepo.findOne({round_id:id});
        return league;
    }
}