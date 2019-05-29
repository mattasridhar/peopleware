import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateComponent } from '../../authenticate.component';

@Component({
  selector: 'app-comp-dashboard',
  templateUrl: './comp-dashboard.component.html',
  styleUrls: ['./comp-dashboard.component.css']
})
export class CompDashboardComponent implements OnInit {
  
  sessionKey: string = "";
  
  constructor(private router: Router,
    private auth: AuthenticateComponent) {
      //to check if current user is the active user
    if (auth.isActiveUser('sessionID')) {
     //continue using the session
     console.log("Hi " + sessionStorage.getItem('uname'));
    } else{
      //redirect to login screen
      router.navigate(['./']);
    }
  }

  ngOnInit() {
  }

  //handler for POST NEW JOB button
  postJobBtnClick() {
    this.router.navigate(['/postJob']);
  }

  //handler for EDIT EXISTING JOB button
  editJobBtnClick() {
    this.router.navigate(['/editJob']);
  }

  //handler for SEE APPLICANTS button
  allJobsBtnClick() {
    this.router.navigate(['/listJobs']);
  }

  //handler for BACK button
  back() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }

}
