import { Component, OnInit, HostListener } from '@angular/core';
import { ApplApplyService } from './appl-apply.service';
import { AuthenticateComponent } from '../../authenticate.component';
import { Router, ActivatedRoute } from '@angular/router';
import { JobSchema, RequirementSchema } from '../../schemas/JobSchema';
import { DropdownQualSchema } from '../../schemas/DropdownSchema';
import { ApplicantSchema } from '../../schemas/ApplicantSchema';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-appl-apply',
  templateUrl: './appl-apply.component.html',
  styleUrls: ['./appl-apply.component.css'],
  providers: [ApplApplyService]
})
export class ApplApplyComponent implements OnInit {

  sessionKey = "";
  jobid: number = 0;
  isDataAvailable: boolean = false;
  message: string = "Data is Currently UnAvailable. Click here to return to Dashboard.";
  jobs: any[];
  jobname: string = "";
  description: string = "";
  contact: string = "";
  email: string = "";
  fullname: string = "";
  jobsalary: number = 0;
  salary: number = 0;

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
  scale: number = 1;
  scales = [];
  skillSet = [];
  skill: string = "";

  newSkills: any[];
  newScale: number = 1;
  newScales = [];
  newSkillSet = [];
  newSkill: string = "";
  count: number = 0;

  degreesList = [{
    "id": null,
    "qualName": null
  }];
  selectedDegrees = [{
    "id": null,
    "qualName": null
  }];
  dropdownSettings = {
    singleSelection: false,
    text: "Academic Qualifications",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: false,
    classes: "myclass custom-class"
  };

  appl: ApplicantSchema = {
    fullname: null,
    email: null,
    contact: null,
    salary: null,
    jobid: 0
  }
  hasApplied: boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticateComponent,
    private applyService: ApplApplyService) {
    //to check if current user is the active user
    if (auth.isActiveUser('sessionID')) {
      //continue using the session
      console.log("Hi " + sessionStorage.getItem('uname'));
    } else {
      //redirect to login screen
      router.navigate(['./']);
    }
  }

  async ngOnInit() {
    //get jobId from parameter
    this.route.params.subscribe(params => {

      if (params.newcopy != undefined) {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
          history.go(1);
        };
      }
      let paramId: string = params.jobid;
      this.jobid = +paramId.substr(1);
      //populate the screen using the jobId
      this.populate(this.jobid);
    });
  }

  //to load the information onto the screen
  async populate(jobid: number) {
    this.degrees = [];
    this.skills = [];
    this.scales = [];
    this.skillSet = [];
    this.newSkillSet = [];
    this.degreesList = [];
    this.selectedDegrees = [];
    this.skill = "";

    await this.applyService.getJobById(jobid).then(data => {
      this.job = data;
      this.jobs = data;
      //reqired to be displayed on UI
      this.jobname = data.jobname;
      this.description = data.description;
      this.jobsalary = data.salary;
      this.salary = data.salary;

      //getting all the Requirements for this Job
      this.applyService.getAllReqsById(jobid).then(result => {
        this.reqs = result;
        
        for (let i = 0; i < result.length; i++) {
          if (typeof (result[i].qualification) === 'string') {
            const jsIn = { "id": (result[i].id), "qualName": (result[i].qualification) };
            this.degreesList.push(jsIn);
            this.selectedDegrees.push(jsIn);
          }
        }

        for (let i = 0; i < result.length; i++) {
          if (typeof (result[i].skill) === 'string') {
            this.skills[i] = (result[i].skill);
            this.skillSet.push(this.skills[i] + " " + this.scale);
          }
        }

      });
      this.isDataAvailable = true;
    });

  }

  //Listener for Skill selection actions removing the scale info from string
  onSkillClick(event, item) {
    this.skill = item.slice(0, -2);
  }

  skillKeyFunction(event) {
    if (event.keyCode == 13) {//push into array on Return Key Press

      if (this.newSkillSet.length !== 0 && typeof this.newSkillSet !== undefined) {
        if (this.newSkills.indexOf(this.skill) !== -1) {
          const index = this.newSkills.indexOf(this.skill);
          this.newScales[index] = this.scale;
          this.newSkillSet[index] = this.skill + " " + this.scale;
        } else {
          this.newSkills.push(this.skill);
          this.newScales.push(this.scale);
          this.newSkillSet.push(this.skill + " " + this.scale);
        }
      } else {
        this.newSkills = [];
        this.newScales = [];
        this.newSkillSet = [];
        this.newSkills.push(this.skill);
        this.newScales.push(this.scale);
        this.newSkillSet.push(this.skill + " " + this.scale);
      }

    }

  }

  //Listener for Radio button presses
  radioSkill(event) {
    this.scale = event.target.value;
  }


  async apply() {
    this.reqs = {};

    //Checkinf if Expected Salary is less than Job Salary
    if (this.salary > this.jobsalary) {
      this.message = "Salary Must be less than or equal to the Salary Specifications: CAD$" + this.jobsalary + ". If you wish not to APPLY for this job, CLICK Here to return to Dashboard.";
      this.isEmpty = true;
      return;
    } else if ( //Checking of all fields are filled or not
      ((this.fullname && this.email && this.contact && this.newSkills && this.newScales) === undefined)
      || ((this.fullname && this.email && this.contact && this.newSkills && this.newScales) === null)
      || ((this.fullname && this.email && this.contact) === '')
      || ((this.selectedDegrees.length) === 0)
      || ((this.newSkills.length) === 0)
      || ((this.newScales.length) === 0)) {
      this.isEmpty = true;
      this.message = " Please Fill all the Fields and Press 'APPLY' Button Again.";
      return;
    } else { //All Valid information, so proceed to db
      this.isEmpty = false;
      this.message = "";
      this.appl.fullname = this.fullname;
      this.appl.email = this.email;
      this.appl.contact = this.contact;
      this.appl.salary = this.salary;
      this.appl.jobid = this.jobid;
      this.count = 0;

      //adding the Applicant information into DB
      await this.applyService.addApplicant(this.appl).then(async resp => {
        if (resp.response === 'Applicant Already Exists.') {
          this.isEmpty = true;
          this.message = "You have already applied for this job. Click here to return to dashboard and apply for other available jobs."
        } else {
          //adding the academic qualifications
          for (let deg of this.selectedDegrees) {
            this.reqs.jobid = this.jobid;
            this.reqs.applid = resp.response;
            this.reqs.qualification = deg.qualName;
            this.reqs.posses = true;
            
            await this.applyService.addReq(this.reqs).then(result => {
              if (!(result === undefined) && (result.response === "Requirement Added Successfully")) {
                this.count++;
              } else {
                console.log("Response Error while adding Degrees: " + result.response);
              }
            }).catch((err: HttpErrorResponse) => {
              // Error logging
              console.error('An error occurred:', err.error);
              this.isEmpty = true;
              this.message = "Error Occured while adding Degrees. Click here to return to Dashboard and Apply again.";
              this.reqs = {};
              return;
            });
            this.reqs = {};
          }
          //adding the skills
          for(let i=0; i<this.newSkills.length;i++){
            this.reqs.jobid = this.jobid;
            this.reqs.applid = resp.response;
            this.reqs.skill = this.newSkills[i];
            this.reqs.scale = this.newScales[i];
            await this.applyService.addReq(this.reqs).then(result => {
              if (!(result === undefined) && (result.response === "Requirement Added Successfully")) {
                this.count++;
              } else {
                console.log("Response Error while adding Skills: " + result.response);
              }
            }).catch((err: HttpErrorResponse) => {
              // Error logging
              console.error('An error occurred:', err.error);
              this.isEmpty = true;
              this.message = "Error Occured while adding Skills. Click here to return to Dashboard and Apply again.";
              this.reqs = {};
              return;
            });
            this.reqs = {};
          }
          if (!(resp === undefined) && (this.count === (this.newSkills.length + this.selectedDegrees.length))) {
            this.isEmpty = true;
            this.hasApplied = true;
            this.message = " Job Applied Succesfully. Click here to return to DashBoard";
          } else {
            this.isEmpty = true;
            this.message = "Job Application Failed. Please Re-Enter details and try submitting again";
          }
        }

      }).catch((err: HttpErrorResponse) => {
        // Error logging
        console.error('An error occurred:', err.error);
        this.isEmpty = true;
        this.message = "Error Occured while applying. Click here to return to Dashboard and Apply again.";
        return;
      });

    }
  }

  //dropdown listeners
  onItemSelect(item: any) {
    console.log("Selected Degree: " + JSON.stringify(item));
    console.log(this.selectedDegrees);
  }
  OnItemDeSelect(item: any) {
    console.log("Deselected Degree: " + JSON.stringify(item));
    console.log(this.selectedDegrees);
  }
  onSelectAll(items: any) {
    console.log("Selected All Degrees: " + JSON.stringify(items));
  }
  onDeSelectAll(items: any) {
    console.log("Selected One of the Degrees: " + JSON.stringify(items));
  }

  //to clear the array of blanks or null values
  cleanArray(actual) {
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

  //button handler for closing the warning message
  warnClose() {
    this.isEmpty = false;
    this.router.navigate(['/applDashboard']);
  }

  //button handler for CLOSE button
  close(){
    this.router.navigate(['/applDashboard']);
  }

  //button handler for LOGOUT button
  logout() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }


}
