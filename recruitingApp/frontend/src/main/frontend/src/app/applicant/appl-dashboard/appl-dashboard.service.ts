import {
  Injectable,
  Inject
} from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class ApplDashboardService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //get All Jobs List
  getAllJobs(): Promise<any> {
    const url = 'http://localhost:9090/api/company/jobs';
    return this.httpClient.get(url).toPromise().catch(e => {
      console.log(e);
    });
  }

}
