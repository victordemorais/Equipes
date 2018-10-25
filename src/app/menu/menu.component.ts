import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../users/users.services';

@Component({
  selector: 'eqp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MenuComponent implements OnInit {
  menuState: string = 'out';
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder, private _usersServices: UsersService) {

  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  addUser() {
    this._usersServices.addUser(this.formulario.value);
    this.menuState = 'out';

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

}
