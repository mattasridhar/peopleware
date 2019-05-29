import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateComponent } from '../../authenticate.component';
import { JobSchema, RequirementSchema } from '../../schemas/JobSchema';
import { ListJobsService } from './list-jobs.service';
import { ApplicantSchema } from '../../schemas/ApplicantSchema';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css'],
  providers: [ListJobsService]
})
export class ListJobsComponent implements OnInit {

  sessionKey = "";
  companyname: string = "";
  isDataAvailable: boolean = false;
  dispJobs: any[];
  jobs: JobSchema = {
    companyname: null,
    jobname: null,
    description: null,
    salary: 0,
    type: null,
  };

  reqs: RequirementSchema = {
    id: 0,
    jobid: 0,
    qualification: null,
    posses: false,
    skill: null,
    scale: 0
  };

  appl: ApplicantSchema = {
    fullname: null,
    email: null,
    contact: null,
    salary: null,
    jobid: 0
  }

  appls: any[];

  hasApplicants: boolean = false;
  isEmpty: boolean = false;
  message: string = "";

  constructor(private listJobService: ListJobsService,
    private router: Router,
    private auth: AuthenticateComponent) {
  }

  async ngOnInit() {
      //to check if current user is the active user
    if (this.auth.isActiveUser('sessionID')) {
      //continue using the session
      console.log("Hi " + sessionStorage.getItem('uname'));
      this.companyname = sessionStorage.getItem('cname');
    } else {
      //redirect to login screen
      this.router.navigate(['./']);
    }
    //getting all jobs from Server
    await this.listJobService.getAllJobsByCompany(this.companyname).then(result => {
      this.jobs = result;
      this.dispJobs = result;
      this.isDataAvailable = true;
    });
  }

  //listener for the dropdown menu
  valueChange(){
    this.appl = {
      fullname: null,
      email: null,
      contact: null,
      salary: null,
      jobid: 0
    };
    this.appls = [];
    const jobid = this.jobs.id;
    //Get all the selected applicants and display them.
    this.listJobService.getSelApplsByJobId(jobid).then( data => {
      this.appl = data;
      this.appls = data;
      if( !(data === undefined) || !(data === null)){
        this.hasApplicants = true;
      }
    }).catch(e => {
      console.log(e);
      this.isEmpty = true;
      this.hasApplicants = false;
      this.message = "Retrival of Applicants Failed. Try Again.";
    });

  }

  //handler for the BACK button
  back() {
    this.router.navigate(['/compDashboard']);
  }

  //Handler for closing the warning bar
  warnClose(){
    this.isEmpty = false;
    this.router.navigate(['/compDashboard']);
  }

  //handler for LOGOUT button
  logout() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }

}
