import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { EntityRepository } from "src/shared/entity.repository";
import { Round } from "./round";
import { Model } from "mongoose";

@Injectable()
export class RoundRepository extends EntityRepository<Round> {
    constructor(@InjectModel(Round.name) roundModel: Model<Round>){
        super(roundModel);
    }
}