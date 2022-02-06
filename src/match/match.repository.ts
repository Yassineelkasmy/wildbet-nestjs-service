import { InjectModel } from "@nestjs/mongoose";
import { EntityRepository } from "src/shared/entity.repository";
import { Match } from "./match";
import { Model } from 'mongoose';
import { Injectable } from "@nestjs/common";

@Injectable()
export class MatchRepository extends EntityRepository<Match> {
    constructor(@InjectModel(Match.name) matchModel: Model<Match>) {
        super(matchModel);
    }
}
