import {
  Injectable,
  Inject
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ApplJobinfoService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //get Job by ID
  getJobById(id: number): Promise<any> {
    const url = 'http://localhost:9090/api/company/jobId/'+ id;
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

  //get All Requirements List by JobId
  getAllReqsById(id: number): Promise<any> {
    const url = 'http://localhost:9090/api/company/reqId/' + id;
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

}
