import { Controller, Get, Param } from '@nestjs/common';
import { Web3Service } from './web3.service';

@Controller('web3')
export class Web3Controller {
  constructor(public web3Service: Web3Service) {}

  @Get()
  async deployTest() {
    await this.web3Service.deployMatchContract(315814);
  }

  @Get("deploy")
  async deployMatchesContratcs() {
    await this.web3Service.deployUnplayedMatchesContracts();
  }



}
