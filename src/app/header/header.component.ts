import { Component, OnInit } from '@angular/core';
import { Users } from '../users/users.model';

@Component({
  selector: 'eqp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: Users[] = [
    { nome: 'Victor', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
    { nome: 'Victor', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
