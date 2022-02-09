import { Module } from '@nestjs/common';
import { MatchModule } from 'src/match/match.module';
import { Web3Controller } from './web3.controller';
import { Web3Service } from './web3.service';

@Module({
    providers:[Web3Service],
    imports : [MatchModule],
    controllers : [Web3Controller]
})
export class Web3Module {}
