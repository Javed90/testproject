import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welocme',
  templateUrl: './welocme.component.html',
  styleUrls: ['./welocme.component.scss']
})
export class WelocmeComponent implements OnInit {
  enterData : any;
  constructor(public router : Router){}

  ngOnInit(): void {
  }

  enterText(){
    localStorage.setItem('userInput', this.enterData);
    if(this.enterData === 'admin' || this.enterData === 'Admin'){
      this.router.navigate(['protected']);
    }else{
      alert(`please hit url  -> users`);
    }
  }
}
