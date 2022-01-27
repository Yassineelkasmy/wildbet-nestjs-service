import { Prop, Schema } from "@nestjs/mongoose";
import { Round } from "src/round/round";
import { Team } from "src/team/team";
import { MatchStats } from "./match_stats";



@Schema({collection:'matches'})
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

    @Prop({type: [Team]})
    home_team: Team;

    @Prop({type:[Team]})
    away_team: Team;

    @Prop({type:[Round]})
    round: Round;


}