import {
  Injectable,
  Inject
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ListJobsService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //get All Jobs List for this comapny
  getAllJobsByCompany(company: string): Promise<any> {
    const url = 'http://localhost:9090/api/company/jobsByCompany/' + company;
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

  //get All selected Applicants for this job
  getSelApplsByJobId(jobid: number): Promise<any> {
    const url = 'http://localhost:9090/api/selAppl/' + jobid;
    return this.httpClient.get(url).toPromise();
  }
}
