import { Component, OnInit } from '@angular/core';
import { User } from '../User.model';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AccountService } from '../account.service';

import { D0embed } from '../d0embed';
import { Embeddings } from '../embeddings.model';

import { F0,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,F16,F17,F18,F19,F20,F21,F22,F23,F24,F25,F26,F27,F28,F29,F30,F31,F32,F33,F34,F35,F36,F37,F38 } from '../cloud-forensics-features';
import { Features } from '../features.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {

  showdirectPredict = false;
  modelResponse: any;
  lastResponse:any;
  
  // affected by the ui
  dee0: any;
  dee1: any;
  dee2: any;
  dee3: any;
  dee4: any;
  dee5: any;
  dee6: any;
  dee7: any;


rxbytes_slope : any;
rxpackets_slope : any;
rxerrors_slope : any;
rxdrops_slope : any;
txbytes_slope : any;
txpackets_slope : any;
txerrors_slope : any;
txdrops_slope : any;
timecpu_slope : any;
timesys_slope : any;
timeusr_slope : any;
state_slope : any;
memmax_slope : any;
mem_slope : any;
cpus_slope : any;
cputime_slope : any;
memactual_slope : any;
memswap_in_slope : any;
memswap_out_slope : any;
memmajor_fault_slope : any;
memminor_fault_slope : any;
memunused_slope : any;
memavailable_slope : any;
memusable_slope : any;
memlast_update_slope : any;
memdisk_cache_slope : any;
memhugetlb_pgalloc_slope : any;
memhugetlb_pgfail_slope : any;
memrss_slope : any;
vdard_req_slope : any;
vdard_bytes_slope : any;
vdawr_reqs_slope : any;
vdawr_bytes_slope : any;
vdaerror_slope : any;
hdard_req_slope : any;
hdard_bytes_slope : any;
hdawr_reqs_slope : any;
hdawr_bytes_slope : any;
hdaerror_slope : any;


  // intermediate dataholders
  ed0: D0embed;
  
  if0: F0;
  if1: F1;
  if2: F2;
  if3: F3;
  if4: F4;
  if5: F5;
  if6: F6;
  if7: F7;
  if8: F8;
  if9: F9;
  if10: F10;
  if11: F11;
  if12: F12;
  if13: F13;
  if14: F14;
  if15: F15;
  if16: F16;
  if17: F17;
  if18: F18;
  if19: F19;
  if20: F20;
  if21: F21;
  if22: F22;
  if23: F23;
  if24: F24;
  if25: F25;
  if26: F26;
  if27: F27;
  if28: F28;
  if29: F29;
  if30: F30;
  if31: F31;
  if32: F32;
  if33: F33;
  if34: F34;
  if35: F35;
  if36: F36;
  if37: F37;
  if38: F38;
  

  // instances of data models. but arrays of data models
  d0: D0embed[] = [];
  
  f0_array: F0[]=[];
  f1_array: F1[]=[];
  f2_array: F2[]=[];
  f3_array: F3[]=[];
  f4_array: F4[]=[];
  f5_array: F5[]=[];
  f6_array: F6[]=[];
  f7_array: F7[]=[];
  f8_array: F8[]=[];
  f9_array: F9[]=[];
  f10_array: F10[]=[];
  f11_array: F11[]=[];
  f12_array: F12[]=[];
  f13_array: F13[]=[];
  f14_array: F14[]=[];
  f15_array: F15[]=[];
  f16_array: F16[]=[];
  f17_array: F17[]=[];
  f18_array: F18[]=[];
  f19_array: F19[]=[];
  f20_array: F20[]=[];
  f21_array: F21[]=[];
  f22_array: F22[]=[];
  f23_array: F23[]=[];
  f24_array: F24[]=[];
  f25_array: F25[]=[];
  f26_array: F26[]=[];
  f27_array: F27[]=[];
  f28_array: F28[]=[];
  f29_array: F29[]=[];
  f30_array: F30[]=[];
  f31_array: F31[]=[];
  f32_array: F32[]=[];
  f33_array: F33[]=[];
  f34_array: F34[]=[];
  f35_array: F35[]=[];
  f36_array: F36[]=[];
  f37_array: F37[]=[];
  f38_array: F38[]=[];

  embedding: Embeddings = new Embeddings();// initiate all arrays in this model via constructor or here

  features : Features = new Features(); // initiate all arrays in this model via constructor or here
  modelResponseString: any;

  constructor(private serv: AccountService) {

  }

  ngOnInit() {
  }


  makepredictrequest() {



    this.if0 = this.rxbytes_slope
    this.if1 = this.rxpackets_slope
    this.if2 = this.rxerrors_slope
    this.if3 = this.rxdrops_slope
    this.if4 = this.txbytes_slope
    this.if5 = this.txpackets_slope
    this.if6 = this.txerrors_slope
    this.if7 = this.txdrops_slope
    this.if8 = this.timecpu_slope
    this.if9 = this.timesys_slope
    this.if10 = this.timeusr_slope
    this.if11 = this.state_slope
    this.if12 = this.memmax_slope
    this.if13 = this.mem_slope
    this.if14 = this.cpus_slope
    this.if15 = this.cputime_slope
    this.if16 = this.memactual_slope
    this.if17 = this.memswap_in_slope
    this.if18 = this.memswap_out_slope
    this.if19 = this.memmajor_fault_slope
    this.if20 = this.memminor_fault_slope
    this.if21 = this.memunused_slope
    this.if22 = this.memavailable_slope
    this.if23 = this.memusable_slope
    this.if24 = this.memlast_update_slope
    this.if25 = this.memdisk_cache_slope
    this.if26 = this.memhugetlb_pgalloc_slope
    this.if27 = this.memhugetlb_pgfail_slope
    this.if28 = this.memrss_slope
    this.if29 = this.vdard_req_slope
    this.if30 = this.vdard_bytes_slope
    this.if31 = this.vdawr_reqs_slope
    this.if32 = this.vdawr_bytes_slope
    this.if33 = this.vdaerror_slope
    this.if34 = this.hdard_req_slope
    this.if35 = this.hdard_bytes_slope
    this.if36 = this.hdawr_reqs_slope
    this.if37 = this.hdawr_bytes_slope
    this.if38 = this.hdaerror_slope



    this.features.f0_array.push(this.if0)
    this.features.f1_array.push(this.if1)
    this.features.f2_array.push(this.if2)
    this.features.f3_array.push(this.if3)
    this.features.f4_array.push(this.if4)
    this.features.f5_array.push(this.if5)
    this.features.f6_array.push(this.if6)
    this.features.f7_array.push(this.if7)
    this.features.f8_array.push(this.if8)
    this.features.f9_array.push(this.if9)
    this.features.f10_array.push(this.if10)
	this.features.f11_array.push(this.if11)
    this.features.f12_array.push(this.if12)
    this.features.f13_array.push(this.if13)
    this.features.f14_array.push(this.if14)
    this.features.f15_array.push(this.if15)
    this.features.f16_array.push(this.if16)
	this.features.f17_array.push(this.if17)
    this.features.f18_array.push(this.if18)
    this.features.f19_array.push(this.if19)
    this.features.f20_array.push(this.if20)
    this.features.f21_array.push(this.if21)
    this.features.f22_array.push(this.if22)
    this.features.f23_array.push(this.if23)
    this.features.f24_array.push(this.if24)
    this.features.f25_array.push(this.if25)
    this.features.f26_array.push(this.if26)
    this.features.f27_array.push(this.if27)
	this.features.f28_array.push(this.if28)
    this.features.f29_array.push(this.if29)
    this.features.f30_array.push(this.if30)
    this.features.f31_array.push(this.if31)
    this.features.f32_array.push(this.if32)
    this.features.f33_array.push(this.if33)
    this.features.f34_array.push(this.if34)
    this.features.f35_array.push(this.if35)
    this.features.f36_array.push(this.if36)
    this.features.f37_array.push(this.if37)
    this.features.f38_array.push(this.if38)


    this.serv.scoreModel(this.features).subscribe((data: any) => {

      this.modelResponse = data['value'];
      console.log('Request finished');
      this.lastResponse= this.modelResponse[this.modelResponse.length-1];
      console.log('The data received is :' + this.lastResponse);
     


    });

  }

  show() {
    this.showdirectPredict = true;
  }

  dontshow() {
    this.showdirectPredict = false;
  }

}
