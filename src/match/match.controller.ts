/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from "@nestjs/common";
import { MatchRepository } from "./match.repository";

@Controller('matches')
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

    @Get('roundMatches/:idRound')
    async fetchMatchByRoundf(@Param('idRound') idRound:number) {
        const matches = await this.matchRepo.find();
        var matchesFilt=[];
        for(let matche of matches){
            if(matche.round.round_id==idRound){
                matchesFilt.push(matche);
            }
        }
        return matchesFilt;
    }

}