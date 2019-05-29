import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { AuthenticateComponent } from '../../authenticate.component';
import { Router } from '@angular/router';
import { UserSchema } from '../../schemas/UserSchema';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  public response: any;
  private fullname: string;
  private companyName: string;
  private actualname: string;
  private username: string;
  private password: string;
  public isCompany: boolean = true;
  public isApplicant: boolean = false;
  public isEmpty: boolean = false;
  private role: string = 'company';//set 'company' or 'applicant'
  private message: string;
  private sessionKey: string = "";

  user: UserSchema = {
    id: null,
    actualname: null,
    username: null,
    password: null,
    role: null
  };

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private auth: AuthenticateComponent) {
    this.auth.setCookie(this.sessionKey);//clears the existing session details
  }

  ngOnInit() {
    this.isEmpty = false;
  }

  //handler for ENROLL COMPANY button.
  isCompanyBtn() {
    this.isCompany = true;
    this.isApplicant = false;
    this.role = "company";
  }

  //handler for ENROLL APPLICANT button
  isApplicantBtn() {
    this.isCompany = false;
    this.isApplicant = true;
    this.role = "applicant";
  }

  enroll() {
    //setting the User values
    //using simple encryption technique: BASE64 btoa<->atob conversion
    (this.isCompany) ? (this.actualname = this.companyName) : (this.actualname = this.fullname);
    this.user.actualname = this.actualname;
    this.user.username = btoa(this.username);
    this.user.password = btoa(this.password);
    this.user.role = this.role;
    //checking if all fields are filled
    if (
      ((this.username && this.password && this.role && this.actualname) === undefined)
      || ((this.username && this.password && this.role && this.actualname) === null)
      || ((this.username && this.password && this.role && this.actualname) === '')) {
      this.isEmpty = true;
      this.message = "Some Fields seem to be empty. Fill in all the fields and try submitting again.";
    } else {
      this.isEmpty = true;
      //adding user to database
      this.registerService.addUser(this.user).then(resp => {
        if (!(resp === undefined) && (resp.response === "User Created Successfully. ")) {
          this.message = " User Created Succesfully. Please go to Login Page.";
        } else {
          this.message = "User Creation Failed. Please Re-Enter details and try submitting again";
        }
      })
    }

  }

  //handler for BACK button
  back() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }

  //handler for the error warning close button
  warnClose() {
    this.isEmpty = false;
    this.router.navigate(['/']);
  }

}
