import { InjectModel } from "@nestjs/mongoose";
import { EntityRepository } from "src/shared/entity.repository";
import { Match } from "./match";
import { Model } from 'mongoose';

export class MatchRepository extends EntityRepository<Match> {
    constructor(@InjectModel(Match.name) matchModel: Model<Match>) {
        super(matchModel);
    }
}
