import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: 'leagues' })
export class League {
    @Prop()
    league_id: number;

    @Prop()
    name: string;

    @Prop()
    logo: string;
}