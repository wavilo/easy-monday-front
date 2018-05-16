import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  datas: Array<Data> = [new Data(1000,100000,10,0.004,400,2.5,0.4,160,6.25)]
  constructor() { }

  ngOnInit() {
  }
 
  calcTable(index){
    const dataObj =  this.datas[index]
    console.log(dataObj)

   dataObj.cpm = (dataObj.budget / dataObj.impression * 1000);

    dataObj.clicks = dataObj.impression * dataObj.ctr;
    dataObj.cpc = dataObj.budget / dataObj.clicks;

    dataObj.regs = dataObj.clicks * dataObj.cr;
    dataObj.cpa = dataObj.budget / dataObj.regs;

  }

  addLine(){
    this.datas.push(new Data(1000,100000,10,0.004,400,2.5,0.4,160,6.25))
  }

}

class Data {
  constructor(public budget: number,
    public impression: number,
    public cpm: number,
    public ctr: number,
    public clicks: number,
    public cpc: number,
    public cr: number,
    public regs: number,
    public cpa: number) {}
  
}