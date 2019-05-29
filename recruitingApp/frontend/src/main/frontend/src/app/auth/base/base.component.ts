import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateComponent } from '../../authenticate.component';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  sessionKey: string = "";
  
  constructor(private router: Router,
    public auth: AuthenticateComponent) {
    this.auth.setCookie(this.sessionKey);//clears the existing session details
  }

  ngOnInit() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");//clear the session storage information
  }

  //Handler for the LOGIN button
  loginBtnClick() {
    this.router.navigate(['/login']);
  }

  //Handler for the REGISTER Button
  registerBtnClick() {
    this.router.navigate(['/register']);
  }
}
