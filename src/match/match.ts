import { Prop, Schema } from "@nestjs/mongoose";
import { MatchStats } from "./match_stats.interface";
import { Round } from "./round.interface";
import { Team } from "./team.interface";

@Schema({collection:'matchss'})
export class Match {

    @Prop()
    match_id:string;

    //We may add enum validation, But we don`t need now as we are adding data manualy
    @Prop()
    status_code:number;

    @Prop()
    status:string;

    @Prop()
    minute:number;

    @Prop()
    match_start:Date;

    @Prop()
    match_start_iso:Date;

    @Prop()
    league_id:number;

    @Prop()
    home_team: Team;

    @Prop()
    away_team: Team;

    @Prop()
    round: Round;

    @Prop()
    stats: MatchStats;
}