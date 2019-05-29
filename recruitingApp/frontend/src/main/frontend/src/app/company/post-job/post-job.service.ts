import {  Injectable, 
          Inject }                      from '@angular/core';
import {  HttpClient, 
          HttpErrorResponse }           from '@angular/common/http';
import {  JobSchema, RequirementSchema }                   from '../../schemas/JobSchema';


@Injectable()
export class PostJobService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //add Job
  addJob(job: JobSchema): Promise<any> {
    const url = 'http://localhost:9090/api/company/addjob';
    return this.httpClient.post(url, job).toPromise();
  };

  //add Requirements
  addReq(req: RequirementSchema): Promise<any> {
    const url = 'http://localhost:9090/api/company/addreq';
    return this.httpClient.post(url, req).toPromise();
  };

}
