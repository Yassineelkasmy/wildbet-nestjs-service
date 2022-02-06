import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: 'teams' })
export class Team {
    @Prop()
    team_id: number;

    @Prop()
    name: string;

    @Prop()
    short_code: string;

    @Prop()
    logo: string;
}