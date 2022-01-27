import { Controller, Get } from "@nestjs/common";
import { MatchRepository } from "./match.repository";

@Controller('matchs')
export class MatchController {
    constructor(private readonly matchRepo:MatchRepository){}

    @Get()
    async fetchMatches() {
        const matchs = await this.matchRepo.find();
    }
}