import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  budget: number;
  impression: number;
  cpm: string;
  ctr: number;
  clicks: number
  cpc: number;
  cr: number;
  regs: number;
  cpa: number;

  constructor() { }

  ngOnInit() {
  }
 
  calcTable(){
    // console.log(this.budget);
    // console.log(this.impression);
    this.cpm = (this.budget / this.impression * 1000) + " €";
    this.ctr = 0.002;
    this.clicks = this.impression * this.ctr;
    this.cpc = this.budget / this.clicks;
    this.cr = 0.002;
    this.regs = this.clicks * this.cr;
    this.cpa = this.budget / this.regs;

  }

}

