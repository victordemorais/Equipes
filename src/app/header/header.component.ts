import { Component, OnInit } from '@angular/core';
import { Users } from '../users/users.model';
import { UsersService } from '../users/users.services';

@Component({
  selector: 'eqp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: Users[];
  

  constructor(_usersServices: UsersService) {
    this.users = _usersServices.getUsers();

  }

  ngOnInit() {
   
  }

}
