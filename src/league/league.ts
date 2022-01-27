import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ collection: 'leagues' })
export class League {
    @Prop()
    _id: number;

    @Prop()
    name: string;
}