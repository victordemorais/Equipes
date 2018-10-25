import { Component, Input } from '@angular/core';

@Component({
  selector: 'eqp-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input() img: string;
  @Input() email: string;
  @Input() nome: string;

  constructor() { }

  
}
