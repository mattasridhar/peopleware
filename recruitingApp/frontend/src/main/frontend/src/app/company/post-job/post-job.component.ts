import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateComponent } from '../../authenticate.component';
import { JobSchema, RequirementSchema } from '../../schemas/JobSchema';
import { PostJobService } from './post-job.service';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css'],
  providers: [PostJobService]
})
export class PostJobComponent implements OnInit {

  sessionKey = "";
  companyname: string = "";
  jobname: string = "";
  description: string = "";
  salary: number;
  degree: string = "";
  hasDegrees: boolean = false;
  degrees = [];
  skill: string = "";
  hasSkills: boolean = false;
  skills = [];
  scale: number = 1;
  scales = [];
  skillSet = [];
  type = "full-time";
  jobid: number;
  job: JobSchema = {
    companyname: null,
    jobname: null,
    description: null,
    salary: 0,
    type: null,
  };
  req: RequirementSchema = {
    jobid: 0,
    qualification: null,
    posses: false,
    skill: null,
    scale: 0
  };
  message: string = "";
  isEmpty: boolean = false;
  count: number = 0;
  isValid: boolean = false;

  constructor(private postJobService: PostJobService,
    private router: Router,
    private auth: AuthenticateComponent) {
      //to check if current user is the active user
    if (auth.isActiveUser('sessionID')) {
      //continue using the session
      console.log("Hi " + sessionStorage.getItem('uname'));
      this.companyname = sessionStorage.getItem('cname');
    } else {
      //redirect to login screen
      router.navigate(['./']);
    }
  }

  ngOnInit() {
    this.isEmpty = false;
  }

  //validate and add the job
  async addJob() {
    if (
      ((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === undefined)
      || ((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === null)
      || ((this.jobname && this.description && this.salary && this.degree && this.skill) === '')) {
      this.isValid = false
    }
    else {
      this.isValid = true;
    }

    if (this.isValid) {
      this.job.companyname = this.companyname;
      this.job.jobname = this.jobname;
      this.job.description = this.description;
      this.job.salary = this.salary;
      this.job.type = this.type;
      this.count = 0;

      await this.postJobService.addJob(this.job).then(async resp => {
        this.jobid = resp.response;
        if (resp === undefined) {
          this.isEmpty = true;
          this.message = "Error Occured. Click here to return to Dashboard and Try Again.";
        } else if (resp.response === 'Job Already Exists.') {
          this.isEmpty = true;
          this.message = "Job Already Exists. Click here to return to Dashboard.";
        } else {
          for (let deg of this.degrees) {
            this.req.jobid = this.jobid;
            this.req.qualification = deg;
            await this.postJobService.addReq(this.req).then(result => {
              console.log("Response for Degrees upload: " + JSON.stringify(result));
              if (!(result === undefined)) {
                if ((result.response === "Requirement Added Successfully")) {
                  this.count++;
                } else {
                  console.log("Error Response: " + result.response);
                }
              } else {
                this.isEmpty = true;
                this.message = "Error Occured. Click here to return to Dashboard and Try Again.";
              }
            }).catch((err: HttpErrorResponse) => {
              // simple logging, but you can do a lot more, see below
              console.error('An error occurred:', err.error);
              this.isEmpty = true;
              this.message = "Error Occured While adding Qualifications. Click here to return to Dashboard and Edit this Job.";
              return;
            });
            this.req = {};
          }
          for (var i = 0; i < this.skills.length; i++) {
            this.req.jobid = this.jobid;
            this.req.skill = this.skills[i];
            this.req.scale = this.scales[i];
            await this.postJobService.addReq(this.req).then(result => {
              console.log("Response for Skills Upload: " + JSON.stringify(result));
              if (!(result === undefined) && (result.response === "Requirement Added Successfully")) {
                this.count++;
              } else {
                console.log("Error Response: " + result.response);
              }
            }).catch((err: HttpErrorResponse) => {
              // Error logging
              console.error('An error occurred:', err.error);
              this.isEmpty = true;
              this.message = "Error Occured while adding Skills. Click here to return to Dashboard and Edit this Job.";
              return;
            });
            this.req = {};
          }
        }
        if (!(resp === undefined) && (this.count === (this.skills.length + this.degrees.length))) {
          this.isEmpty = true;
          this.message = " Job Created Succesfully. Click here to return to DashBoard";
        } else {
          this.isEmpty = true;
          this.message = "Job Creation Failed. Please Re-Enter details and try submitting again";
        }
      }).catch((err: HttpErrorResponse) => {
        // simple logging, but you can do a lot more, see below
        console.error('An error occurred:', err.error);
        this.isEmpty = true;
        this.message = "Error Occured while creating Job. Click here to return to Dashboard and Post this Job Again.";
        return;
      });

    } else {
      this.isEmpty = true;
      this.message = " Please Fill all the Fields and Press Enroll Button Again"
    }

  }

  //Handler for BACK button
  back() {
    this.router.navigate(['/compDashboard']);
  }

  //on Return key press push degrees into the ACADEMIC QUALIFICATIONS box
  degreeKeyFunction(event) {
    if (event.keyCode == 13) {
      this.hasDegrees = true;
      this.degrees.push(this.degree);
    }

  }
  closeDegree() {
    this.hasDegrees = false;
    this.degrees = [];
  }

  //on Return key press push skills into the SKILLS box
  skillKeyFunction(event) {
    if (event.keyCode == 13) {
      this.hasSkills = true;

      if (this.skills.indexOf(this.skill) !== -1) {
        const index = this.skills.indexOf(this.skill);
        this.scales[index] = this.scale;
        this.skillSet[index] = this.skill + " " + this.scale;
      } else {
        this.skills.push(this.skill);
        this.scales.push(this.scale);
        this.skillSet.push(this.skill + " " + this.scale);
      }
    }
  }

  //Handler for closing the SKILL box
  closeSkill() {
    this.hasSkills = false;
    this.skills = [];
    this.scales = [];
    this.skillSet = [];
  }

  //listener for scale radios
  radioSkill(event) {
    this.scale = event.target.value;
  }

  //Listerner for Job type radios
  radioType(event) {
    this.type = event.target.value;
  }

  //handler for warning bar
  warnClose() {
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
