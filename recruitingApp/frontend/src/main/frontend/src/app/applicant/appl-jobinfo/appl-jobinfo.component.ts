import { Component, OnInit } from '@angular/core';
import { ApplJobinfoService } from './appl-jobinfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateComponent } from '../../authenticate.component';
import { RequirementSchema, JobSchema } from '../../schemas/JobSchema';

@Component({
  selector: 'app-appl-jobinfo',
  templateUrl: './appl-jobinfo.component.html',
  styleUrls: ['./appl-jobinfo.component.css'],
  providers: [ApplJobinfoService]
})
export class ApplJobinfoComponent implements OnInit {

  sessionKey = "";
  jobid: number = 0;
  isDataAvailable: boolean = false;
  message: string = "Data is Currently UnAvailable. Click here to return to Dashboard.";
  jobs: any[];
  job: JobSchema = {
    companyname: null,
    jobname: null,
    description: null,
    salary: 0,
    type: null,
  };
  req: any[];
  reqs: RequirementSchema = {
    id: 0,
    jobid: 0,
    qualification: null,
    posses: false,
    skill: null,
    scale: 0
  };
  isEmpty: boolean = false;
  degrees: any[];
  skills: any[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticateComponent,
    private jobinfoService: ApplJobinfoService) {
    //to check if current user is the active user
    if (auth.isActiveUser('sessionID')) {
      //continue using the session
      console.log("Hi " + sessionStorage.getItem('uname'));
    } else {
      //redirect to login screen
      router.navigate(['./']);
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {

      if (params.newcopy != undefined) {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
          history.go(1);
        };
      }
      let paramId: string = params.jobid;
      this.jobid = +paramId.substr(1);
      //load the data onto the screen by using the jobid from param
      this.loadScreen(this.jobid);
    });
  }

  //fetching and loading the data onto screen using jobid
  async loadScreen(jobid: number) {
    this.degrees = [];
    this.skills = [];
    //fetching job information
    await this.jobinfoService.getJobById(jobid).then(data => {
      this.job = data;
      this.jobinfoService.getAllReqsById(jobid).then(result => {
        for(let i=0; i< result.length;i++){
        this.degrees[i] = (result[i].qualification);
        this.skills[i] = (result[i].skill);
        }
        this.degrees = this.cleanArray(this.degrees);
        this.skills = this.cleanArray(this.skills);
      });
      this.isDataAvailable = true;
    });
  }

  //Handler for PROCEED and APPLY button
  proceed(){
    this.router.navigate(['/applApply/:'+ this.jobid]);
  }

  //to clean the array of null or blank values
  cleanArray(actual) {
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

  //handler for the Warnings
  warnClose() {
    this.isDataAvailable = false;
    this.router.navigate(['/applDashboard']);
  }

  //handler for the Back button
  back() {
    this.router.navigate(['/applDashboard']);
  }

  //Handler for the LOGOUT button
  logout() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }


}
