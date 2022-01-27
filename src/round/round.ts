import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: 'rounds' })
export class Round {

    @Prop()
    contract_address:string;

    @Prop()
    round_id: number;
    
    @Prop()
    name: string;

    @Prop()
    season_id: number;

    @Prop()
    league_id: number;

    @Prop()
    is_current: boolean;

    @Prop()
    league_name: string;

  
}