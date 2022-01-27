import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EntityRepository } from "src/shared/entity.repository";
import { League } from "./league";
import { Model } from "mongoose";

@Injectable()
export class LeagueRepository extends EntityRepository<League, number> {
    constructor(@InjectModel(League.name) leagueModel: Model<League>){
        super(leagueModel);
    }
}