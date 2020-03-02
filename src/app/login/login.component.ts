import { Component, OnInit } from '@angular/core';
import { LoginService } from '../@shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) { }
  logIn = false;
  ngOnInit() {
  }

  onLogIn(username: string){
    this.loginService.setLogIn(username);
    this.logIn = true;
  }
}