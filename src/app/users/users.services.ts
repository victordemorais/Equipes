import { Injectable } from '@angular/core';
import { Users } from './users.model';

@Injectable()
export class UsersService {
    users: Users[] = [
        { nome: 'teste', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'teste', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'teste', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'teste', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'teste', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'Victor', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'Victor', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: 'Victor', email: 'victordemorais@hotmail.com.br', img: 'assets/imgs/user-girl.png' },
        { nome: "Marcos", email: "marcosmendonca@gmail.com", img: "assets/imgs/user-girl.png" }
    ];
    getUsers() {
        return this.users;
    }
    addUser(user: Users) {
        this.users.push(user);
        return this.users;
    }
}