import { Injectable } from '@angular/core';
import {Login } from '../models/login';

@Injectable()
export class LoginService {
  private login: Login;
  constructor() { }

  getLogIn(){
    return this.login;
  }

  setLogIn(username: string){
    this.login = new Login(username);
  }
}