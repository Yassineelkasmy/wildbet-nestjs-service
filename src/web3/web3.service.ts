/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { MatchRepository } from "src/match/match.repository";
import Web3 from "web3";
import {matchContractByteCode,matchContractAbi} from '../contracts/MatchContract';

@Injectable()
export class Web3Service {

  constructor (
    public matchRepository:MatchRepository
  ){}

   address = '0x82d0628089B3f60b02C31C47D5FF186D522C83b1';
   privateKey = '68ace53511224a73018ac73d9277f8b97e910ba273ec3092238ae4d6dbfd6116';
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

          console.log(resp.options.address)
        }
     );

      //console.log(matchContractAddress);
      
     console.log(unixMatchDate);
     
   }

   async deployUnplayedMatchesContracts() {
     const matches = await this.matchRepository.find();
     const unplayedMatches = matches.filter( (m)=> m.status!='finished' )
         

     for (const matche of unplayedMatches) {
       this.deployMatchContract(matche.match_id);
     }
   }


  //  async endMatchBid(){
     
  //  }



}