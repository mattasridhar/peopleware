import { NgModule }                 from "@angular/core";
import { RouterModule, 
         Routes}                    from '@angular/router';

import { RegisterComponent }        from "./auth/register/register.component";
import { LoginComponent }           from "./auth/login/login.component";
import { BaseComponent }            from "./auth/base/base.component";
import { CompDashboardComponent }   from "./company/comp-dashboard/comp-dashboard.component";
import { EditJobComponent }         from "./company/edit-job/edit-job.component";
import { PostJobComponent }         from "./company/post-job/post-job.component";
import { ListJobsComponent }        from "./company/list-jobs/list-jobs.component";
import { ApplDashboardComponent }   from "./applicant/appl-dashboard/appl-dashboard.component";
import { ApplApplyComponent } from "./applicant/appl-apply/appl-apply.component";
import { ApplJobinfoComponent } from "./applicant/appl-jobinfo/appl-jobinfo.component";

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'compDashboard',
    component: CompDashboardComponent
  },
  {
    path: 'editJob',
    component: EditJobComponent
  },
  {
    path: 'postJob',
    component: PostJobComponent
  },
  {
    path: 'listJobs',
    component: ListJobsComponent
  },
  {
    path: 'applDashboard',
    component: ApplDashboardComponent
  },
  {
    path: 'applApply/:jobid',
    component: ApplApplyComponent
  },
  {
    path: 'applJobInfo/:jobid',
    component: ApplJobinfoComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})

export class AppRouting { }