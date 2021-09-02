import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  url: string = `https://gorest.co.in/public-api/users?_format=json&access-token=w_jllpN9SVvjAgyKdYQm2Wdt2NWdU-3VagI0`;
  users: any = [];

  constructor(public _api: ApiService) { }


  ngOnInit() {
    this._api.get(this.url).subscribe(users => {
      console.log(users);
      this.users = users.data;
    })
  }
}
