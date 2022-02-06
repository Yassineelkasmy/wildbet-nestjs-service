import { Prop } from '@nestjs/mongoose';

export class Round {
    round_id:number;
    is_current: boolean;
    name:string;
}