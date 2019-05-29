import {
  Injectable,
  Inject
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { ApplicantSchema } from '../../schemas/ApplicantSchema';
import { RequirementSchema } from '../../schemas/JobSchema';

@Injectable()
export class ApplApplyService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //get Job by ID
  getJobById(id: number): Promise<any> {
    const url = 'http://localhost:9090/api/company/jobId/'+ id;
    return this.httpClient.get(url).toPromise();
  }

  //get All Requirements List by JobId
  getAllReqsById(id: number): Promise<any> {
    const url = 'http://localhost:9090/api/company/reqId/' + id;
    return this.httpClient.get(url).toPromise();
  }

  //add Applicant
  addApplicant(appl: ApplicantSchema): Promise<any> {
    const url = 'http://localhost:9090/api/appl/addappl/';
    return this.httpClient.post(url, appl).toPromise();
  }

  //add Requirements
  addReq(req: RequirementSchema): Promise<any> {
    const url = 'http://localhost:9090/api/company/addreq';
    return this.httpClient.post(url, req).toPromise();
  }
}
