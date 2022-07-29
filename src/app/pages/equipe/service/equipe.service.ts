import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { TokenService } from '../../customlogin/token-service.service';
import { EquipeListResult } from '../model/equipe';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

list(page: number, size: number): Observable<EquipeListResult>{

  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${this.tokenService.getToken("access_token")}`
    }),
  };

  return this.http.get<EquipeListResult>(`${environment.url}/${environment.version}/teams?page=${page}&size=${size}`, httpOptions);
}

}
