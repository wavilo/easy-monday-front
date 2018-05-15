import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  budget: number;
  impression: number;
  cpm: number;
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
    this.cpm = (this.budget / this.impression * 1000);
    this.ctr = this.clicks / this.impression;
    this.clicks = this.impression * this.ctr;
    this.cpc = this.budget / this.clicks;
    this.cr = this.regs / this.clicks;
    this.regs = this.clicks * this.cr;
    this.cpa = this.budget / this.regs;

  }

}

