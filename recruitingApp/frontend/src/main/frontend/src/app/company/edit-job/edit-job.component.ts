import { Component, OnInit } from '@angular/core';
import { EditJobService } from './edit-job.service';
import { Router } from '@angular/router';
import { AuthenticateComponent } from '../../authenticate.component';
import { JobSchema, RequirementSchema } from '../../schemas/JobSchema';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css'],
  providers: [EditJobService]
})
export class EditJobComponent implements OnInit {

  sessionKey = "";
  hasData: Boolean = false;
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
  jobs: any[];
  reqs: any[];
  oldJob: JobSchema = {
    companyname: null,
    jobname: null,
    description: null,
    salary: 0,
    type: null,
  };
  oldReq: any[];
  oldReqs: RequirementSchema = {
    id: 0,
    jobid: 0,
    qualification: null,
    posses: false,
    skill: null,
    scale: 0
  };
  message: string = "";
  isEmpty: boolean = false;
  isValid: boolean = false;
  isDataAvailable: boolean = false;

  //to store new Values
  oldDegrees = [];
  newDegrees = [];
  oldSkills = [];
  newSkills = [];
  oldScales = [];
  newScales = [];
  reqsMap: Map<number, JobSchema[]> = new Map<number, JobSchema[]>();
  newJob: JobSchema = {
    companyname: null,
    jobname: null,
    description: null,
    salary: 0,
    type: null,
  };
  newReq: RequirementSchema = {
    jobid: 0,
    qualification: null,
    posses: false,
    skill: null,
    scale: 0
  };

  constructor(private editJobService: EditJobService,
    private router: Router,
    private auth: AuthenticateComponent) {
      //to check if current user is the active user
    if (auth.isActiveUser('sessionID')) {
      //continue using the session
      console.log("Hi " + sessionStorage.getItem('uname'));
      //get the companyname from session for which this user is associated
      this.companyname = sessionStorage.getItem('cname');
    } else {
      //redirect to login screen
      router.navigate(['./']);
    }
  }

  async ngOnInit() {
    //getting all jobs from Server using the companyname of the loggedin user from the session information
    await this.editJobService.getAllJobsByCompany(this.companyname).then(result => {
      this.oldJob = result;
      this.jobs = result;
      this.isDataAvailable = true;
    });
  }

  //validate the inputs and make the changes accordingly
  async editJob() {
    if (
      ((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === undefined)
      || ((this.jobname && this.description && this.salary && this.degree && this.skill && this.scale) === null)
      || ((this.jobname && this.description && this.salary && this.degree && this.skill) === '')
      || ((this.skills.length) === 0)
      || ((this.scales.length) === 0)) {
      this.isValid = false
    }
    else {
      this.isValid = true;
      if (this.degrees.indexOf(this.degree) !== -1) {
        const index = this.degrees.indexOf(this.degree);
        this.degrees[index] = this.degree;
      }
      if (this.skills.indexOf(this.skill) !== -1) {
        const index = this.skills.indexOf(this.skill);
        this.skills[index] = this.skill;
      }

    }

    if (this.isValid) {
      this.newDegrees = this.cleanArray(this.degrees);
      this.newSkills = this.cleanArray(this.skills);
      this.newScales = this.cleanArray(this.scales);
      this.newJob.companyname = this.companyname;
      this.newJob.jobname = this.jobname;
      this.newJob.description = this.description;
      this.newJob.salary = this.salary;
      this.newJob.type = this.type;
      //pushing the edited job information
      await this.editJobService.editJob(this.newJob).then(async resp => {
        //Update if found in Old Job Req Data else Insert. If Old req data is not in new ones then Delete thm frm db.
        for (let deg of this.newDegrees) {
          if (this.oldDegrees.indexOf(deg) !== -1) {//match is found in oldDegrees
            //do no update
          } else {//match is fount in newDegrees
            //do insert
            this.newReq.jobid = this.oldJob.id;
            this.newReq.qualification = deg;
            const index = this.oldDegrees.indexOf(deg);
            await this.editJobService.addReq(this.newReq).then(result => {
              console.log("Response of Degrees updation: " + JSON.stringify(result));
            });
            this.newReq = {};
          }
        }
        //if old degrees are not found in new ones then they vl b deleted.
        for (let deg of this.oldDegrees) {

          if (this.newDegrees.indexOf(deg) !== -1) {//match is found in newDegrees
            const index = this.newDegrees.indexOf(deg);
          } else {
            for (let element of this.oldReq) {

              if (element.qualification === deg) {
                const id = element.id;
                const index = this.newDegrees.indexOf(deg);
                await this.editJobService.delReq(id).then(result => {
                  console.log("Response of Degrees updation: " + JSON.stringify(result));
                });
              }
            }
          }
          this.newReq = {};
        }

        //Update if found in Old Job Req Data else Insert. If Old req data is not in new ones then Delete thm frm db.
        for (var i = 0; i < this.newSkills.length; i++) {

          if (this.oldSkills.indexOf(this.newSkills[i]) !== -1) {//match found in oldSkills
            const index = this.oldSkills.indexOf(this.newSkills[i]);
            //check for scale
            if (this.newScales[i] == this.oldScales[index]) {
              //do no update
            } else {
              //do update
              this.newReq.id = this.oldReq[i].id;
              this.newReq.jobid = this.oldJob.id;
              this.newReq.skill = this.newSkills[i];
              this.newReq.scale = this.newScales[i];
              await this.editJobService.editJobReq(this.newReq).then(result => {
                console.log("Response of Skill Updation: " + JSON.stringify(result));
              });
              this.newReq = {};
            }
          } else {
            //do insert
            this.newReq.jobid = this.oldJob.id;
            this.newReq.skill = this.skills[i];
            this.newReq.scale = this.scales[i];
            const index = this.oldSkills.indexOf(this.newSkills[i]);
            await this.editJobService.addReq(this.newReq).then(result => {
              console.log("Response for New Skill addition: " + JSON.stringify(result));
            });
            this.newReq = {};
          }
        }

        for (var i = 0; i < this.oldSkills.length; i++) {
          if (this.newSkills.indexOf(this.oldSkills[i]) !== -1) {//found in newSkills so do nothing
            //do no delete
          } else {
            //delete from db
            const id = this.oldReq[i].id;
            this.editJobService.delReq(id).then(result =>{
              console.log("Response for Removal of Skills: " + JSON.stringify(result));
            });
          }
        }

        if (!(resp === undefined)) {
          this.isEmpty = true;
          this.message = " Job Updated Succesfully. Click here to return to DashBoard";
        } else {
          this.isEmpty = true;
          this.message = "Job Updation Failed. Please Re-Enter details and try creating new Job posting again";
        }
      });

    } else {
      this.isEmpty = true;
      this.message = " Please Fill all the Fields and Press 'Edit Job' Button Again"
    }
  }

  //Listener for the dropdown menu
  async valueChange() {
    this.newReq = {};
    this.degrees = [];
    this.skills = [];
    this.scales = [];
    this.skillSet = [];
    this.degree = "";
    this.skill = "";
    this.hasData = true;
    const pivot = this.oldJob.id;

    //fetching the information regading the selected job
    await this.editJobService.getAllReqsById(pivot).then(reqData => {
      this.oldReq = reqData;
      for (var i = 0; i < reqData.length; i++) {
        this.oldReq[i].id = reqData[i].id;
        this.oldReq[i].qualification = reqData[i].qualification;
        if (reqData[i].qualification === null) {
        } else {
          this.degrees[i] = (reqData[i].qualification);
          this.oldDegrees[i] = (reqData[i].qualification);
          this.degree = (reqData[i].qualification);
        }

        if (reqData[i].skill === null) {
        } else {
          this.skills[i] = (reqData[i].skill);
          this.oldSkills[i] = (reqData[i].skill);
          this.skill = (reqData[i].skill);
        }

        if (reqData[i].scale == 0) {
        } else {
          this.scales[i] = (reqData[i].scale);
          this.oldScales[i] = (reqData[i].scale);
          this.skillSet.push(this.skills[i] + " " + this.scales[i]);
          this.reqsMap.set(reqData[i].id, this.skillSet[i]);
        }
        this.hasDegrees = true;
        this.hasSkills = true;

      }
      //removing blanks from Degrees & SkillSet
      this.degrees = this.cleanArray(this.degrees);
      this.oldDegrees = this.cleanArray(this.oldDegrees);

      this.skills = this.cleanArray(this.skills);
      this.oldSkills = this.cleanArray(this.oldSkills);

      this.scales = this.cleanArray(this.scales);
      this.oldScales = this.cleanArray(this.oldScales);
    });

    //let reqsMap: Map<number, JobSchema[]> = new Map<number, JobSchema[]>();
    //setting values in UI
    for (var i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].id == pivot) {
        this.jobname = this.jobs[i].jobname;
        this.description = this.jobs[i].description;
        this.type = this.jobs[i].type;
        this.salary = this.jobs[i].salary;
      }
    }
  }

  //to remoev null and blanks from the arrays
  cleanArray(actual) {
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

  //handler for the BACK button
  back() {
    this.router.navigate(['/compDashboard']);
  }

  //handler for the CLOSE button
  close() {
    this.hasData = false;
    this.isEmpty = false;
  }

  //Listerner for the degrees key press events
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

  //pushes the selected skill into the array
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
  //closes the SKILLs box
  closeSkill() {
    this.hasSkills = false;
    this.skills = [];
    this.scales = [];
    this.skillSet = [];

  }

  //Listeners for the scale radio
  radioSkill(event) {
    this.scale = event.target.value;
  }

  //listeners for the Job type radios
  radioType(event) {
    this.type = event.target.value;
  }

  //closes the warning bar
  warnClose() {
    this.isEmpty = false;
    this.router.navigate(['/compDashboard']);
  }

  //handler for the LOGOUT button
  logout() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);
  }


}
