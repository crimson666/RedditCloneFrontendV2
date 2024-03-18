import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignuprequestPayload } from '../signup/signup-request.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8080/api/auth/sighup';

  constructor(private httpClient : HttpClient) {  }

  sighup(signupRequestPayload : SignuprequestPayload): Observable<any>{
    return this.httpClient.post(this.url, signupRequestPayload, {responseType : 'text'});
  }
}
