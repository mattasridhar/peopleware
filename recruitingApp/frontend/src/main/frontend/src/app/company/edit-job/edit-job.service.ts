import {
  Injectable,
  Inject
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { JobSchema, RequirementSchema } from '../../schemas/JobSchema';

@Injectable()
export class EditJobService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //get All Jobs List
  getAllJobs(): Promise<any> {
    const url = 'http://localhost:9090/api/company/jobs';
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

  //get All Jobs List for this comapny
  getAllJobsByCompany(company: string): Promise<any> {
    const url = 'http://localhost:9090/api/company/jobsByCompany/' + company;
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

  //get All Requirements List by JobId
  getAllReqsById(id: any): Promise<any> {
    const url = 'http://localhost:9090/api/company/reqId/' + id;
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

  //edit Job
  editJob(job: JobSchema): Promise<any> {
    const url = 'http://localhost:9090/api/company/updateJob';
    return this.httpClient.put(url, job).toPromise().catch((err: HttpErrorResponse) => {
      // Error loggin
      console.error('An error occurred:', err.error);
    });
  }

  //edit Job Requirement
  editJobReq(req: RequirementSchema): Promise<any> {
    const url = 'http://localhost:9090/api/company/updateJobReq';
    return this.httpClient.put(url, req).toPromise().catch((err: HttpErrorResponse) => {
      // Error logging
      console.error('An error occurred:', err.error);
    });
  }

  //add Requirements
  addReq(req: RequirementSchema): Promise<any> {
    const url = 'http://localhost:9090/api/company/addreq';
    return this.httpClient.post(url, req).toPromise().catch((err: HttpErrorResponse) => {
      // error loggin
      console.error('An error occurred:', err.error);
    });
  }

  //delete Requirements
  delReq(id: any): Promise<any> {
    const url = 'http://localhost:9090/api/company/delReq/' + id;
    return this.httpClient.delete(url).toPromise().catch((err: HttpErrorResponse) => {
      // Error logging
      console.error('An error occurred:', err.error);
    });
  }

}
