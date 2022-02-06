import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EntityRepository } from "src/shared/entity.repository";
import { Team } from "./team";
import { Model } from "mongoose";

@Injectable()
export class TeamRepository extends EntityRepository<Team> {
    constructor(@InjectModel(Team.name) teamModel: Model<Team>){
        super(teamModel);
    }
}