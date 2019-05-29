import {  Injectable, 
          Inject }                      from '@angular/core';
import {  HttpClient, 
          HttpErrorResponse }           from '@angular/common/http';
import {  UserSchema }                  from "../../schemas/UserSchema";

@Injectable()
export class RegisterService {

  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  //add Users
  addUser(user: UserSchema): Promise<any> {
    const url = 'http://localhost:9090/api/user/adduser';
    return this.httpClient.post(url, user).toPromise().catch((err: HttpErrorResponse) => {
      // Error logging
      console.error('An error occurred:', err.error);
    });
  }
}
