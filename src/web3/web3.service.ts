/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { MatchRepository } from "src/match/match.repository";
import { MatchStatus } from "src/match/match_status.enum";
import Web3 from "web3";
import {matchContractByteCode,matchContractAbi} from '../contracts/MatchContract';

@Injectable()
export class Web3Service {

  constructor (
    public matchRepository:MatchRepository
  ){}

   address = '0xbBA47b81Cb29ac7b88Cc8EF6241Bf8C2eA7eF996';
   privateKey = 'd3b070526a697b8e79ff490786cc60ab099c947bf10b682bd46c4c1073b2f13a';
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
   //web3 =  new Web3('27e484dcd9e3efcfd25a83a78777cdf1');
   contract:any;
   account = this.web3.eth.accounts.privateKeyToAccount(this.privateKey);


   async deployMatchContract(matchId:number) : Promise<void> {

    
    
    const matchDate = new Date ( (await this.matchRepository.find({match_id:matchId}))[0].match_start_iso);

    const unixMatchDate = Math.round((matchDate.getTime() / 1000))

     this.contract = await new this.web3.eth.Contract(matchContractAbi);
     this.contract.deploy({
       data: matchContractByteCode,
       arguments: [matchId.toString(),matchDate.getTime()]
     })
     .send({
       from: this.account.address,
       gas: 6721975,
     }).then(
       (resp) => {  
        this.matchRepository.update({match_id:matchId},{contract_address:resp.options.address})

          resp.options.address
        }
     );

      //console.log(matchContractAddress);
      
     console.log(unixMatchDate);
     
   }

   async deployUnplayedMatchesContracts() {
     const unplayedMatches = await this.matchRepository.find({status_code:MatchStatus.NotStarted});
     

     for (const matche of unplayedMatches) {
       this.deployMatchContract(matche.match_id);
     }
   }


  //  async endMatchBid(){
     
  //  }



}