import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AuthenticateComponent } from '../../authenticate.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  sessionKey:string = "";
  pwdChk: string = "";
  unameChk: string = "";
  role:string = "";  
  company:string = "";
  private message: string;
  public isEmpty:boolean = false;

  constructor(private loginService: LoginService,
    private router: Router,
    public auth: AuthenticateComponent) { 
      this.auth.setCookie(this.sessionKey);//clears the existing session details
    }

  ngOnInit() {
    this.auth.setCookie(this.sessionKey);//clears the existing session details

  }

  //to add a new User
  async login() {
    //fetch user information from db and perform 'atob' operation to get String.
    //simple Base64 encryption techniques.
    await this.loginService.getUser(btoa(this.username)).then(resp => {
      this.unameChk = atob(resp.username);
      this.pwdChk = atob(resp.password);
      this.role = resp.role;
      this.company = resp.actualname;
    });
    
    if((this.username === this.unameChk) && (this.password === this.pwdChk)){
      //converting username & password to BASE64 values for simple authentication.
      const uname = btoa(this.username);
      const pwd = btoa(this.password);
      this.sessionKey = btoa(uname + '??' + pwd);//btoa doesn't convert '??' to BASE64 value
      //setting the credentials into cookies if match is found
      this.auth.setCookie(this.sessionKey);
      sessionStorage.setItem('uname', this.username);
      this.isEmpty = false;
      if(this.role === "company"){
        sessionStorage.setItem('cname', this.company);
        this.router.navigate(['/compDashboard']);
      }else if(this.role === "applicant"){
        sessionStorage.setItem('cname', "Applicant");
        this.router.navigate(['/applDashboard']);
      }else{
        sessionStorage.setItem('cname', "");
        this.router.navigate(['/']);
      }
    }else{
      console.log("Login Failed: ");
      //re-setting the credentials into cookies if match is not found
      this.sessionKey = "";
      this.auth.setCookie(this.sessionKey);
      sessionStorage.setItem('uname', "");
      this.isEmpty = true;
      this.message = "Please use correct User Name and Password."
    }
    
  }  
  
  //button handler for closing the warning message
  warnClose() {
    this.isEmpty = false;
    this.router.navigate(['/']);
  }

  //handler for BACK button
  back() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }

}
