import { Component } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csv_file';

   data = [
    {
      name: "Madesh",
      regno:"21CSEA1",
      age: 45,
      class:"MCA",
      college:"Bharathiar University",
      
    },
    {
      name: "BalaMurugan",
      regno:"21CSEA1",
      age: 45,
      class:"MCA",
      college:"Bharathiar University",
    },
    {
      name: "Boban Vinit",
      regno:"21CSEA1",
      age: 45,
      class:"MCA",
      college:"Bharathiar University",
    },
  ];

  fileDownload()
  {

    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'My details',
      useBom: true,
      noDownload:false,
      headers: ["Name", "RegNo", "Age","Class","College"]
    };
    new ngxCsv(this.data, "Report", options);

    
  }
   
  //  new ngxCsv(data, 'My Report');


   

 }
