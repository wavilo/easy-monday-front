import { Component, NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'


declare var tableau: any;

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  
  tableauViz: any;
  
  name:string;

  // viz: any;
  // vizLen: any = this.url.length,
  // vizCount = 0;
  

  constructor() { 

  }

  ngOnInit() {
    var placeholderDiv = document.getElementById('tableauViz');
    var url = "http://public.tableau.com/views/RegionalSampleWorkbook/Stocks";
  
    var options = {
      hideTabs: true,
      width: '800px',
      height: '700px',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);    
  }

  exportToPDF() {
    this.tableauViz.showExportPDFDialog();
}



// createViz(vizPlusMinus) {
//   var vizDiv = document.getElementById("tableauViz"),
//       options = {
//           hideTabs: true
//       };

//   this.vizCount = this.vizCount + vizPlusMinus;
  
//   if (this.vizCount >= vizLen) { 
//   // Keep the this.vizCount in the bounds of the array index.
//       this.vizCount = 0;
//   } else if (this.vizCount < 0) {
//       this.vizCount = vizLen - 1;
//   }
  
//   if (viz) { // If a viz object exists, delete it.
//       viz.dispose();
//   }

//   var vizURL = vizList[this.vizCount];
//   viz = new tableau.Viz(vizDiv, vizURL, options); 
// }




}
