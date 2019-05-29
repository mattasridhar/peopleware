import {  Injectable, 
          Inject }              from '@angular/core';
import {  HttpClient }          from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

}
