import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignuprequestPayload } from '../signup/signup-request.payload';
import { Observable, map } from 'rxjs';
import { LoginrequestPayload } from '../login/login.request.payload';
import { loginResponse } from '../login/login.response.payload';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient : HttpClient , private localStorage : LocalStorageService) {  }

  sighup(signupRequestPayload : SignuprequestPayload): Observable<any>{
    return this.httpClient.post(this.url + 'signup', signupRequestPayload, {responseType : 'text'});
  }

  login(loginrequestPayload :LoginrequestPayload): Observable <boolean>{
    return this.httpClient.post<loginResponse>(this.url + 'login', loginrequestPayload)
    .pipe(map(data => {
      this.localStorage.store('authenticationToken', data.authenticationToken);
      this.localStorage.store('expiresAt', data.expiresAt);
      this.localStorage.store('refreshToken', data.refreshToken);
      this.localStorage.store('username', data.username);
      return true;
    }));
  }
}
