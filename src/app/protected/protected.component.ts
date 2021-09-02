import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {
    newData : any = [];
   data : any = {
    "Commercial": [
      {
        "Business": "Business"
      },
      {
        "Business Only": "Business"
      },
      {
        "Commercial Condo": "Condo"
      },
      {
        "Commercial Retail": "Condo"
      }
    ],
    "Multi-Unit ": [
      {
        "5-8 Units": "Units"
      },
      {
        "9-12 Units": "Units"
      },
      {
        "Over 12 Units": "Units"
      }
    ],
    "Residential": [
      {
        "Co-Op": "Co-Op"
      },
      {
        "Condominium": "Condo"
      },
      {
        "Cottage / Rec. Properties": "Condo"
      }
    ]
};

  constructor() { 
    Object.keys(this.data).forEach((key) => {
      console.log(this.data[key]);
      this.newData.push({title : key , data : this.data[key]})
    });
    
  }

  ngOnInit(): void {
  }

}
