import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { BaseComponent } from './auth/base/base.component';
import { AuthenticateComponent } from './authenticate.component';
import { CompDashboardComponent } from './company/comp-dashboard/comp-dashboard.component';
import { PostJobComponent } from './company/post-job/post-job.component';
import { EditJobComponent } from './company/edit-job/edit-job.component';
import { ListJobsComponent } from './company/list-jobs/list-jobs.component';
import { ApplDashboardComponent } from './applicant/appl-dashboard/appl-dashboard.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ApplJobinfoComponent } from './applicant/appl-jobinfo/appl-jobinfo.component';
import { ApplApplyComponent } from './applicant/appl-apply/appl-apply.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BaseComponent,
    CompDashboardComponent,
    PostJobComponent,
    EditJobComponent,
    ListJobsComponent,
    ApplDashboardComponent,
    ApplJobinfoComponent,
    ApplApplyComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AngularMultiSelectModule,
  ],
  providers: [AuthenticateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
