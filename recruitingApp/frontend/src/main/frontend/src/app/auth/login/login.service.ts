import {  Injectable, 
          Inject }                      from '@angular/core';
import {  HttpClient, 
          HttpErrorResponse }           from '@angular/common/http';
import {  UserSchema }                  from "../../schemas/UserSchema";

@Injectable()
export class LoginService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //get UsersList
  getUser(id: string): Promise<any> {
    const url = 'http://localhost:9090/api/user/userId/';
    return this.httpClient.get(url+id).toPromise().catch(e => {
      console.log(e);
    });
  }

}
