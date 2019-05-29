import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplDashboardService } from './appl-dashboard.service';
import { AuthenticateComponent } from '../../authenticate.component';
import { JobSchema } from '../../schemas/JobSchema';

@Component({
  selector: 'app-appl-dashboard',
  templateUrl: './appl-dashboard.component.html',
  styleUrls: ['./appl-dashboard.component.css'],
  providers: [ApplDashboardService]
})
export class ApplDashboardComponent implements OnInit {

  sessionKey: string = "";
  isDataAvailable: boolean = false;
  dispJobs: any[];
  jobs: JobSchema = {
    companyname: null,
    jobname: null,
    description: null,
    salary: 0,
    type: null,
  };
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticateComponent,
    private applDashboardService: ApplDashboardService) {
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
    //getting all jobs from Server
    await this.applDashboardService.getAllJobs().then(result => {
      this.jobs = result;
      this.dispJobs = result;
      this.isDataAvailable = true;
    });
  }

  //Listener for dropdown selections
  valueChange(){
    const jobid = this.jobs.id;
    this.router.navigate(['/applJobInfo/:'+ jobid]);
  }

  //handler for LOGOUT button
  logout() {
    this.sessionKey = "";
    this.auth.setCookie(this.sessionKey);
    sessionStorage.setItem('uname', "");
    this.router.navigate(['/']);

  }

}
