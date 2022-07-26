import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserLogin, UserLoginResult, UserDetail } from './model/User';
import { TokenService } from './token-service.service';



@Injectable({
  providedIn: 'root'
})

export class CustomloginService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  userLogin(body: UserLogin): Observable<UserLoginResult>{
    return this.http.post<UserLoginResult>(`${environment.url}/login`, body);
  }

  userDetails(): Observable<UserDetail> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
      }),
    };

    return this.http.get<UserDetail>(`${environment.url}/${environment.version}/user/me`, httpOptions);
  }

}
